import React, { useState } from 'react';
import Link from 'next/link';
// import fetch from 'node-fetch';

const URLForm = () => {
    const [url, setUrl] = useState('');
    const [linkStatus, setLinkStatus] = useState(null);
    // const [totalCount, setTotalCount] = useState(0);
    let $count = 0;

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`/api/checkStatus?url=${encodeURIComponent(url)}`);
            console.log(response);
            const data = await response.json();
            setLinkStatus(data.linkStatus);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <section className='py-[50px]'>
            <div className="container">
                <div className=''>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            className='py-[10px] px-[14px] border-[1px] border-black'
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            placeholder="Enter website URL"
                            required
                        />
                        <button type="submit" className='ml-[30px]'>Check Links</button>
                    </form>
                    {linkStatus && (
                        
                        <ul className='mt-[40px]'>
                            <li className='flex'>
                                <h3 className='max-w-[200px] w-full'>Result </h3> <span className='max-w-[500px] w-full inline-block'> URL</span> 
                            </li>
                            {Object.entries(linkStatus).map(([link, status]) => (
                                // {status == 'Not Found' ? }
                                status != 'OK' ?
                                    <li key={link}>
                                        <span className='max-w-[200px] w-full inline-block'> 404 {status}</span> <Link href={link} className='max-w-[500px] w-full'> {link}:</Link> 
                                    </li>
                                    : $count++
                            ))}
                            { $count == 0 ? 'Not Found ' : ''}
                        </ul>
                    )}
                </div>
            </div>
        </section>
    );
};

export default URLForm;
