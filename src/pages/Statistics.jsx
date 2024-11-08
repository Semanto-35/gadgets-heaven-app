import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';
import { ComposedChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer, Scatter } from 'recharts';

const Statistics = () => {
  const allProduct = useLoaderData();
  const data = [...allProduct].slice(0, 12)
  return (
    <div>
      <Helmet>
        <title>Statistics - My Gadgets Heaven</title>
      </Helmet>
      <div className="px-4 text-center py-8 bg-[#9538E2]">
        <h3 className="font-bold text-xl md:text-3xl text-white mb-4">Dashboard</h3>
        <p className="text-white">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
      </div>
      <h3 className='mt-12 px-4 mb-8 font-bold text-2xl'>Statistics</h3>
      <div className='p-8 bg-white mb-12 md:mb-16 lg:mb-24'>
        <ResponsiveContainer width="100%" height={400}>
          <ComposedChart data={data}>
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="product_title" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="price" fill="#9538E2" barSize={20} name="Price" />
            <Scatter dataKey="rating" fill="#9538E2" name="Rating" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;