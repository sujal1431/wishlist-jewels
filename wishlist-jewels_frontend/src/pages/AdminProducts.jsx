import React, { useState, useEffect } from "react";
import { backendUrl } from "../config";
import { useNavigate } from "react-router-dom";

const CLOUD_NAME = "dlg6jvfaq";
const UPLOAD_PRESET = "jewelry_preset";

export default function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    id: null,
    name: "",
    category: "",
    price: "",
    description: "",
    stock: "",
    imageUrls: [], // ✅ multiple images
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
    if (!localStorage.getItem("admin")) navigate("/admin-login");
  }, [navigate]);

  const fetchProducts = async () => {
    try {
      const res = await fetch(`${backendUrl}/api/products`);
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleImageUpload = async (e) => {
    const files = Array.from(e.target.files);
    if (!files.length) return;

    setLoading(true);
    try {
      const uploadedUrls = [];
      for (const file of files) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", UPLOAD_PRESET);

        const res = await fetch(
          `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
          { method: "POST", body: formData }
        );
        const data = await res.json();
        uploadedUrls.push(data.secure_url);
      }
      setForm({ ...form, imageUrls: uploadedUrls });
      alert("✅ Images uploaded successfully!");
    } catch (err) {
      console.error(err);
      alert("❌ Image upload failed");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.category || !form.price || !form.stock || !form.description || !form.imageUrls.length) {
      alert("Please fill all fields and upload at least one image.");
      return;
    }

    try {
      const method = form.id ? "PUT" : "POST";
      const url = form.id ? `${backendUrl}/api/products/${form.id}` : `${backendUrl}/api/products`;
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed to save product");
      alert("✅ Product saved!");
      setForm({ id: null, name: "", category: "", price: "", description: "", stock: "", imageUrls: [] });
      fetchProducts();
    } catch (err) {
      console.error(err);
      alert("❌ Error saving product");
    }
  };

  const handleEdit = (product) => setForm(product);
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this product?")) return;
    try {
      await fetch(`${backendUrl}/api/products/${id}`, { method: "DELETE" });
      fetchProducts();
    } catch (err) { console.error(err); }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Admin - Manage Products</h2>
        <button onClick={() => { localStorage.removeItem("admin"); navigate("/admin-login"); }}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Logout</button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3 mb-6 bg-gray-100 p-4 rounded-lg">
        <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Name" className="w-full p-2 border rounded" required />
        <select name="category" value={form.category} onChange={handleChange} className="w-full p-2 border rounded" required>
          <option value="">Select Category</option>
          <option value="Rings">Rings</option>
          <option value="Necklaces">Necklaces</option>
          <option value="Daily Wear">Daily Wear</option>
          <option value="Earrings">Earrings</option>
        </select>
        <input type="number" name="price" value={form.price} onChange={handleChange} placeholder="Price" className="w-full p-2 border rounded" min="0" required />
        <input type="number" name="stock" value={form.stock} onChange={handleChange} placeholder="Stock" className="w-full p-2 border rounded" min="0" required />
        <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" className="w-full p-2 border rounded" required />

        <input type="file" accept="image/*" multiple onChange={handleImageUpload} />
        {loading && <p>Uploading images...</p>}
        <div className="flex gap-2 mt-2">
          {form.imageUrls.map((url, idx) => <img key={idx} src={url} alt="preview" className="w-20 h-20 object-cover rounded" />)}
        </div>

        <button type="submit" disabled={loading} className="bg-blue-600 text-white px-4 py-2 rounded">
          {form.id ? "Update Product" : "Add Product"}
        </button>
      </form>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th>ID</th><th>Images</th><th>Name</th><th>Category</th><th>Price</th><th>Stock</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(p => (
            <tr key={p.id}>
              <td className="p-2 border">{p.id}</td>
              <td className="p-2 border flex gap-1">
                {p.imageUrls?.map((img, i) => <img key={i} src={img} alt="img" className="w-12 h-12 object-cover" />)}
              </td>
              <td className="p-2 border">{p.name}</td>
              <td className="p-2 border">{p.category}</td>
              <td className="p-2 border">₹{p.price}</td>
              <td className="p-2 border">{p.stock}</td>
              <td className="p-2 border flex gap-2">
                <button onClick={() => handleEdit(p)} className="bg-yellow-500 text-white px-2 py-1 rounded">Edit</button>
                <button onClick={() => handleDelete(p.id)} className="bg-red-600 text-white px-2 py-1 rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
