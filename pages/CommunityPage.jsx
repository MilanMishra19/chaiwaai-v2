import { clientReviews } from "../constants";
import axios from 'axios';
import { useEffect, useState } from 'react';
import Footer from "../sections/Footer";
import Header from "../sections/Header";
import Section from "../sections/Section";
import styled, { keyframes } from 'styled-components'; 

const API_BASE_URL = 'http://localhost:5000'; // Backend server URL

// Keyframes for animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const scaleUp = keyframes`
  from { transform: scale(0.95); }
  to { transform: scale(1); }
`;

const CommunityPage = () => {
    const [blogs, setBlogs] = useState([]); 
    const [newBlog, setNewBlog] = useState({ title: "", content: "" });
    const [isModerator, setIsModerator] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const checkModeratorStatus = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/api/user/status`);
                setIsModerator(response.data.isModerator);
            } catch (error) {
                console.error('Error checking moderator status:', error);
                setIsModerator(false); // Fallback to false
            }
        };
        checkModeratorStatus();
    }, []);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/api/blogs`);
                console.log('API Response:', response.data);
                if (Array.isArray(response.data)) {
                    setBlogs(response.data);
                } else {
                    console.error('Expected an array but got:', response.data);
                    setBlogs([]); // Fallback to an empty array
                }
            } catch (error) {
                console.error('Error fetching blogs:', error);
                setBlogs([]); // Fallback to an empty array
            } finally {
                setIsLoading(false);
            }
        };
        fetchBlogs();
    }, []);

    const handleBlogSubmit = async (e) => {
        e.preventDefault();
        const newBlogPost = {
            title: newBlog.title,
            author: "Community Member",
            content: newBlog.content,
        };

        try {
            const response = await axios.post(`${API_BASE_URL}/api/blogs`, newBlogPost);
            setBlogs([...blogs, response.data]);
            setNewBlog({ title: "", content: "" });
        } catch (error) {
            console.error('Error posting blog:', error);
        }
    };

    const handleDeleteBlog = async (id) => {
        try {
            await axios.delete(`${API_BASE_URL}/api/blogs/${id}`);
            setBlogs(blogs.filter(blog => blog._id !== id));
        } catch (error) {
            console.error('Error deleting blog:', error);
        }
    };

    return (
        <Section id="community">
            <Header />
            <h3 className="text-[2rem] leading-normal md:text-[2.5rem] font-serif text-center text-brown-800">Community</h3>
            <p className="text-center body-2 text-brown-600">Hear from our beloved customers and more!</p>

            <div className="client-container">
                {clientReviews.map((item) => (
                    <ClientReviewCard key={item.id}>
                        <div>
                            <p className="text-brown-800 font-light">{item.review}</p>
                            <div className="client-container">
                                <div className="flex gap-3">
                                    <img src={item.img} alt={item.name} className="w-12 h-12 rounded-full shadow-md" />
                                    <div className="flex flex-col">
                                        <p className="font-semibold text-brown-800">{item.name}</p>
                                        <p className="text-brown-600 md:text-base text-sm font-light">{item.position}</p>
                                        <div className="flex self-end items-center gap-2">
                                            {Array.from({ length: 5 }).map((_, index) => (
                                                <img key={index} src="/star (2).svg" alt="star rating" className="w-5 h-5" />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ClientReviewCard>
                ))}
            </div>

            <BlogSection>
                <h2 className="text-[1.75rem] leading-[2.5rem] md:text-[2rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight text-center font-serif text-brown-800">Community Blog</h2>

                {isLoading ? (
                    <p className="text-brown-600 text-center">Loading blogs...</p>
                ) : blogs.length === 0 ? (
                    <p className="text-brown-600 text-center">No blogs available. Be the first to share your story!</p>
                ) : (
                    blogs.map((blog) => (
                        <BlogCard key={blog._id}>
                            <h3 className="text-xl font-medium text-brown-800">{blog.title}</h3>
                            <p className="text-brown-600 text-sm">By {blog.author}</p>
                            <p className="mt-2 text-brown-700">{blog.content}</p>
                            {isModerator && (
                                <button onClick={() => handleDeleteBlog(blog._id)} className="text-red-500 hover:text-red-700">Delete</button>
                            )}
                        </BlogCard>
                    ))
                )}

                <BlogForm onSubmit={handleBlogSubmit}>
                    <h3 className="text-[2rem] leading-normal md:text-2xl text-xl mb-2 text-brown-800">Share Your Chai Story!</h3>
                    <input
                        type="text"
                        placeholder="Blog Title"
                        value={newBlog.title}
                        onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
                        required
                        className="border border-brown-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-brown-500"
                    />
                    <textarea
                        placeholder="Your Chai Experience..."
                        value={newBlog.content}
                        onChange={(e) => setNewBlog({ ...newBlog, content: e.target.value })}
                        required
                        className="border border-brown-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-brown-500"
                    />
                    <button type="submit" className="bg-brown-500 hover:bg-brown-700 text-white font-bold py-2 px-4 rounded transition-all duration-300">
                        Post Blog
                    </button>
                </BlogForm>
            </BlogSection>
            <Footer />
        </Section>
    );
};

const BlogSection = styled.div`
    border: 1px solid #754641;
    border-radius: 12px;
    padding: 20px;
    margin-top: 20px;
    background-color: #F5E6DA;
    animation: ${fadeIn} 0.5s ease-in-out;
`;

const BlogCard = styled.div`
    border: 1px solid #754641;
    border-radius: 8px;
    padding: 15px;
    margin-bottom: 10px;
    background-color: #D2A679;
    animation: ${fadeIn} 0.5s ease-in-out;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.02);
    }
`;

const BlogForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
    animation: ${fadeIn} 0.5s ease-in-out;

    input,
    textarea {
        padding: 8px;
        border: 1px solid #754641;
        border-radius: 8px;
        transition: border-color 0.3s ease;

        &:focus {
            border-color: #754641;
            box-shadow: 0 0 0 2px rgba(117, 70, 65, 0.2);
        }
    }

    button {
        background-color: #754641;
        color: white;
        padding: 10px 15px;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        transition: background-color 0.3s ease;

        &:hover {
            background-color: #5a352f;
        }
    }
`;

const ClientReviewCard = styled.div`
    border: 1px solid #754641;
    border-radius: 12px;
    padding: 15px;
    margin-bottom: 10px;
    background-color: #F5E6DA;
    animation: ${fadeIn} 0.5s ease-in-out;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.02);
    }
`;

export default CommunityPage;