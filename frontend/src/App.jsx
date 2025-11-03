import React from 'react';
import Dashboard from './components/Dashboard.jsx';
import './App.css';
import UploadDoc from './components/UploadDoc.jsx';
import Layout from './components/Layout.jsx';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
function App() {
  // const [pdfData, setPdfData] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState('');
  // const [dataSource, setDataSource] = useState([]);

  // Table Columns
  // const columns = [
  //   {
  //     title: 'Date',
  //     dataIndex: 'date',
  //     key: 'date',
  //     sorter: (a, b) => {
  //       const dateA = new Date(a.date.replace(/\s+/g, ''));
  //       const dateB = new Date(b.date.replace(/\s+/g, ''));
  //       return dateA - dateB;
  //     },
  //   },
  //   {
  //     title: 'Description',
  //     dataIndex: 'description',
  //     key: 'description',
  //   },
  //   {
  //     title: 'Amount',
  //     dataIndex: 'amount',
  //     key: 'amount',
  //     sorter: (a, b) => a.amount - b.amount,
  //   },
  //   {
  //     title: 'Category',
  //     dataIndex: 'category',
  //     key: 'category',

  //     filters: [
  //       { text: 'Revenue', value: 'Revenue' },
  //       { text: 'Marketing', value: 'Marketing' },
  //       { text: 'Hosting', value: 'Hosting' },
  //     ],
  //     onFilter: (value, record) => record.category === value,
  //   },
  //   {
  //     title: 'Account',
  //     dataIndex: 'account',
  //     key: 'account',
  //   },
  //   {
  //     title: 'Tags',
  //     dataIndex: 'tags',
  //     key: 'tags',
  //   },
  // ];

  // 🧠 Automation Rule Engine
  // const applyRules = (description, amount) => {
  //   let tag = 'Other'; // Default tag

  //   // Rule 1: If description includes "Stripe", tag as Revenue
  //   if (description.toLowerCase().includes('stripe')) {
  //     tag = 'Revenue';
  //   }

  //   // Rule 2: If description includes "AWS", tag as Hosting
  //   if (description.toLowerCase().includes('aws')) {
  //     tag = 'Hosting';
  //   }

  //   // Rule 3: If amount is negative, mark as Expense
  //   if (amount < 0) {
  //     tag = 'Expense';
  //   }

  //   return tag;
  // };

  // 🧩 Fetch and format data
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:3000/get-data');
  //       const pdfData = response.data;

  //       console.log('Fetched PDF Data:', pdfData);

  //       const formattedData = pdfData.map((item, index) => {
  //         const description = item.extracted?.description || 'N/A';
  //         const amount = item.extracted?.amount || 0;
  //         const date = item.extracted?.date || 'N/A';
  //         const account = item.extracted?.account || 'N/A';
  //         const category = item.extracted?.category || 'N/A';

  //         // Apply automation rule engine
  //         const tag = applyRules(description, amount);

  //         return {
  //           key: item._id || index,
  //           filename: item.filename,
  //           date,
  //           description,
  //           amount,
  //           account,
  //           category,
  //           tags: tag, // 👈 add tag result here
  //         };
  //       });

  //       console.log('Formatted Data:', formattedData);

  //       setDataSource(formattedData);
  //     } catch (err) {
  //       console.error('Error fetching data:', err);
  //       setError('Failed to fetch PDF data');
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // if (loading) return <p>Loading data...</p>;
  // if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <>
   
     <BrowserRouter>
          <Routes>
            
            <Route path="/" element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path="upload-docs" element={<UploadDoc />} />
    
            </Route>
          </Routes>
        </BrowserRouter>
      {/* <Table dataSource={dataSource} columns={columns} /> */}
    </>
  );
}

export default App;
