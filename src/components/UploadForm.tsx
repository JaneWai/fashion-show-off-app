import React, { useState, useRef } from 'react';
import { Upload, X, Camera } from 'lucide-react';

const UploadForm: React.FC = () => {
  const [preview, setPreview] = useState<string | null>(null);
  const [caption, setCaption] = useState('');
  const [tags, setTags] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!preview) return;

    setIsUploading(true);
    
    // Simulate upload delay
    setTimeout(() => {
      // In a real app, you would send the data to your backend here
      console.log({
        image: preview,
        caption,
        tags: tags.split(' ').map(tag => tag.startsWith('#') ? tag.substring(1) : tag)
      });
      
      // Reset form
      setPreview(null);
      setCaption('');
      setTags('');
      setIsUploading(false);
      
      // Show success message
      alert('Your fashion post has been uploaded successfully!');
    }, 1500);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Share Your Fashion</h2>
      
      <form onSubmit={handleSubmit}>
        {/* Image Upload Area */}
        <div 
          className={`border-2 border-dashed rounded-lg p-4 mb-6 ${preview ? 'border-pink-300' : 'border-gray-300'}`}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          {!preview ? (
            <div 
              className="flex flex-col items-center justify-center py-12 cursor-pointer"
              onClick={() => fileInputRef.current?.click()}
            >
              <Upload className="h-12 w-12 text-gray-400 mb-3" />
              <p className="text-gray-700 font-medium mb-1">Drag and drop your image here</p>
              <p className="text-gray-500 text-sm mb-4">or click to browse</p>
              <button
                type="button"
                className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition-colors"
              >
                Select Image
              </button>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/*"
                className="hidden"
              />
            </div>
          ) : (
            <div className="relative">
              <img 
                src={preview} 
                alt="Preview" 
                className="w-full h-auto rounded-md max-h-96 object-contain mx-auto"
              />
              <button
                type="button"
                onClick={handleRemoveImage}
                className="absolute top-2 right-2 bg-gray-800 bg-opacity-70 text-white rounded-full p-1 hover:bg-opacity-100 transition-opacity"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>

        {/* Caption Input */}
        <div className="mb-6">
          <label htmlFor="caption" className="block text-gray-700 font-medium mb-2">
            Caption
          </label>
          <textarea
            id="caption"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            rows={3}
            placeholder="Write a caption for your fashion post..."
          />
        </div>

        {/* Tags Input */}
        <div className="mb-6">
          <label htmlFor="tags" className="block text-gray-700 font-medium mb-2">
            Tags
          </label>
          <input
            id="tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            placeholder="Add tags separated by spaces (e.g. fashion summer style)"
          />
          <p className="text-sm text-gray-500 mt-1">
            Add # before each tag or separate with spaces
          </p>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={!preview || isUploading}
            className={`flex items-center px-6 py-3 rounded-md text-white font-medium ${
              !preview || isUploading ? 'bg-gray-400 cursor-not-allowed' : 'bg-pink-600 hover:bg-pink-700'
            }`}
          >
            {isUploading ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Uploading...
              </>
            ) : (
              <>
                <Camera className="h-5 w-5 mr-2" />
                Share Fashion
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UploadForm;
