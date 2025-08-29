import React, { useState } from 'react'
import { FaPlus, FaTrash } from 'react-icons/fa'
import axios from 'axios';
import userRequest from '../../../requestMethods';


const AddProduct = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [inputs, setInputs] = useState({});
    const [image, setImage] = useState('');
    const [uploading, setUploading] = useState('Uploading is 0%');
    const [selectedOptions, setSelectedOptions] = useState({
        concern: [],
        skinType: [],
        categories: [],

    });

    const imageChange = e => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedImage(e.target.files[0])
        }
    }

    const handleSelectChange = e => {
        setSelectedOptions(prev => ({
            ...prev,
            [e.target.name]: [...prev[e.target.name], e.target.value]
        }));
    };

    const handleRemoveOption = (name, value) => {
        setSelectedOptions(prev => ({ ...prev, [name]: prev[name].filter((options) => options !== value) }))
    }

    const handleChange = (e) => setInputs({
        ...inputs,
        [e.target.name]: e.target.type === "number" ? Number(e.target.value) : e.target.value
    })

    const handleUpload = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append("file", selectedImage);
        data.append('upload_preset', 'uploads')

        setUploading('Uploading ...')
        try {
            const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/dshqgvgne/image/upload", data)

            const { url } = uploadRes.data;
            setImage(url);
            setUploading('Upload successful');
            const payload = { image: url, ...inputs, ...selectedOptions };

            console.log("Payload to backend:", payload);
            await userRequest.post("/products", payload);
        } catch (error) {
            console.log(error);
            setUploading('Upload failed');
        }
    }
    return (
        <div className="p-5">
            <div className="flex items-center justify-between mb-5">
                <h1 className="text-3xl font-semibold">New Product</h1>
            </div>
            <div className="mt-5 bg-white p-5 shadow-lg rounded-lg">
                <form className="flex flex-col md:flex-row gap-5">
                    <div className="flex-1 space-y-5">
                        <div>
                            <label className="block mb-2 font-semibold">Product Image</label>
                            {
                                !selectedImage ? <div className="border-2 h-[100px] w-[100px] border-[#444] border-solid rounded-md flex items-center justify-center">
                                    <label htmlFor="file" className="cursor-pointer">
                                        <FaPlus className="text-[20px]" />
                                    </label>
                                </div> : <img src={URL.createObjectURL(selectedImage)} alt="Selected" className="h-[100px] w-[100px] object-cover rounded-md" />
                            }

                            <input
                                type="file"
                                id="file"
                                style={{ display: "none" }}
                                onChange={imageChange}
                            />
                            <span>{uploading}</span>
                        </div>
                        <div>
                            <label className="block mb-2 font-semibold">Product Name</label>
                            <input
                                type="text"
                                name="title"
                                onChange={handleChange}
                                placeholder="Product Name"
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>
                        <div>
                            <label className="block mb-2 font-semibold">
                                Product Description
                            </label>
                            <textarea
                                name="desc"
                                cols={15}
                                rows={7}
                                placeholder="Product Description"
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>
                        <div>
                            <label className="block mb-2 font-semibold">
                                Product Original Price
                            </label>
                            <input
                                type="number"
                                name="originalPrice"
                                onChange={handleChange}
                                placeholder="Original Price"
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>
                        <div>
                            <label className="block mb-2 font-semibold">
                                Product Discounted Price
                            </label>
                            <input
                                type="number"
                                name="discountedPrice"
                                onChange={handleChange}
                                placeholder="Discounted Price"
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>
                    </div>
                    <div className="flex-1 space-y-5">
                        <div>
                            <label className="block mb-2 font-semibold">
                                Wholesale Price
                            </label>
                            <input
                                type="number"
                                name="wholesalePrice"
                                onChange={handleChange}
                                placeholder="50"
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>
                        <div>
                            <label className="block mb-2 font-semibold">
                                Wholesale Minimum Quantity
                            </label>
                            <input
                                type="number"
                                name="wholesaleMinimumQuantity"
                                onChange={handleChange}
                                placeholder="10"
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>
                        <div>
                            <label className="block mb-2 font-semibold">Brand</label>
                            <input
                                type="text"
                                name="brand"
                                onChange={handleChange}
                                placeholder="Kylie"
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>
                        <div>
                            <label className="block mb-2 font-semibold">Concern</label>
                            <select
                                name="concern"
                                onChange={handleSelectChange}
                                className="border-2 border-[#444] border-solid p-2 mb-4 sm:mb-0 sm:mr-4"
                            >
                                <option disabled defaultValue={true}>
                                    Select Concern
                                </option>
                                <option>Dry Skin</option>
                                <option>Pigmentation</option>
                                <option>Oil Control</option>
                                <option>Anti Acne</option>
                                <option>Sunburn</option>
                                <option>Skin Brightening</option>
                                <option>Tan Removal</option>
                                <option>Night Routine</option>
                                <option>UV Protection</option>
                                <option>Damaged Hair</option>
                                <option>Frizzy Hair</option>
                                <option>Stretch Marks</option>
                                <option>Color Protection</option>
                                <option>Dry Hair</option>
                                <option>Soothing</option>
                                <option>Dandruff</option>
                                <option>Greying</option>
                                <option>Hairfall</option>
                                <option>Hair Color</option>
                                <option>Well Being</option>
                                <option>Acne</option>
                                <option>Hair Growth</option>
                            </select>
                            <div className="mt-2">
                                {selectedOptions.concern.map((option) => (
                                    <div key={option} className="flex items-center space-x-2">
                                        <span>{option}</span>
                                        <FaTrash onClick={() => handleRemoveOption("concern", option)} className="cursor-pointer text-red-500" />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <label className="block mb-2 font-semibold">Skin Type</label>
                            <select
                                name="skinType"
                                onChange={handleSelectChange}
                                className="border-2 border-[#444] border-solid p-2 mb-4 sm:mb-0 sm:mr-4"
                            >
                                <option disabled defaultValue={true}>
                                    Select Skin Type
                                </option>
                                <option>All</option>
                                <option>Oily</option>
                                <option>Dry</option>
                                <option>Sensitive</option>
                                <option>Normal</option>
                            </select>
                            <div className="mt-2">
                                {selectedOptions.skinType.map((option) => (
                                    <div key={option} className="flex items-center space-x-2">
                                        <span>{option}</span>
                                        <FaTrash onClick={() => handleRemoveOption("skinType", option)} className="cursor-pointer text-red-500" />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <label className="block mb-2 font-semibold">Category</label>
                            <select
                                name="categories"
                                className="border-2 border-[#444] border-solid p-2 mb-4 sm:mb-0 sm:mr-4"
                            >
                                <option disabled defaultValue={true}>
                                    Select Category
                                </option>
                                <option>Serums</option>
                                <option>Toners</option>
                                <option>Lotions</option>
                                <option>Foundations</option>
                            </select>
                            <div className="mt-2">
                                {selectedOptions.categories.map((option) => (
                                    <div key={option} className="flex items-center space-x-2">
                                        <span>{option}</span>
                                        <FaTrash onClick={() => handleRemoveOption("categories", option)} className="cursor-pointer text-red-500" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button
                            type="button"
                            onClick={handleUpload}
                            className="bg-slate-500 text-white py-2 px-4 rounded"
                        >
                            Create
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddProduct