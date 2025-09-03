import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import userRequest from '../../requestMethods';

const Banner = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [inputs, setInputs] = useState({ title: '', subtitle: '' });
  const [banners, setBanners] = useState([]);
  const [uploading, setUploading] = useState('uploading is 0%');

  const handleImageChange = e => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0])
    }
  }

  const handleChange = (e) => setInputs({ ...inputs, [e.target.name]: e.target.value })

  const handleUpload = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("file", selectedImage);
    data.append('upload_preset', 'uploads')

    setUploading('Uploading ...')
    try {
      const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/dshqgvgne/image/upload", data)

      const { url } = uploadRes.data;

      const payload = { image: url, ...inputs, title: inputs.title, subtitle: inputs.subtitle };

      const res = await userRequest.post("/banners", payload);
      setBanners([...banners, res.data]);

      setUploading('Upload successful');
      
      setInputs({ title: "", subtitle: "" });
      
      setSelectedImage(null);
    } catch (error) {
      console.log(error);
      setUploading('Upload failed');
    }
  }

  const handleDelete = async (id) => {
    try {
      await userRequest.delete(`/banners/${id}`);
      setBanners(banners.filter(banner => banner._id !== id));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const getBanners = async () => {
      try {
        const res = await userRequest.get("/banners");
        setBanners(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getBanners();
  }, [])
  return (
    <div className='flex justify-beteen m-[10%]'>
      {/* Left */}
      <div className='mr-[50px]'>
        <h2>Active Banners</h2>
        {banners?.map((banner, index) => {
          return (
            <div key={index} className='flex flex-col spece-y-4'>
              <div className='flex items-center justify-between border-b pb-4'>
                <img src={banner.image} alt={banner.title} className='w-32 h-32 object-cover rounded-md ' />
                <div className="flex-1 ml-4">
                  <h3>{banner.title}</h3>
                  <p>{banner.subtitle}</p>
                </div>
                <button className='bg-red-600 p-1' onClick={() => handleDelete(banner._id)}>Delete</button>
              </div>
            </div>
          )
        })}
      </div>
      {/* Right */}
      <div className="flex flex-col">

        <div className="flex-1 bg-white p-5">

          <div className="flex flex-col">
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
              onChange={handleImageChange}
            />
            <span>{uploading}</span>

            <div className='flex flex-col my-3'>
              <span>Title:</span>
              <input type="text" value={inputs.title} onChange={handleChange} name="title" className='w-[250px] outline-none border-b-2 border-[#444] border-solid' />
            </div>
            <div className='flex flex-col my-3'>
              <span>Subtitle:</span>
              <input type="text"  value={inputs.subtitle} onChange={handleChange} name="subtitle" className='w-[250px] outline-none border-b-2 border-[#444] border-solid' />
            </div>
            <button className='bg-green-600' onClick={handleUpload}>Upload</button>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Banner