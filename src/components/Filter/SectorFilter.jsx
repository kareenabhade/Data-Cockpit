import React, { useState, useEffect } from 'react';
import { Box, FormControl, InputLabel, Input, FormHelperText, Button, MenuItem, Select } from '@mui/material';
import { toast, Slide } from 'react-toastify';
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from 'recharts';

const SectorFilter = () => {
  const [sector, setSector] = useState('');
  const [criteria, setCriteria] = useState('');
  const [criteriaValue, setCriteriaValue] = useState('');
  const [data, setData] = useState([]);
  const [aggregatedData, setAggregatedData] = useState([]);

  const COLORS = [
    '#0088FE', '#00C49F', '#FFBB28', '#FF8042',
    '#FF6347', '#FFD700', '#4B0082', '#8A2BE2',
    '#20B2AA', '#FF69B4', '#8B0000', '#00CED1',
    '#FF4500', '#2E8B57', '#7B68EE', '#DAA520',
    '#5F9EA0', '#6495ED', '#DC143C',
  ];

  const fetchData = async () => {
    try {
      const response = await fetch('/api/data');
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      const info = await response.json();
      setData(info);
    } catch (error) {
      console.error('Fetch error:', error);
      toast.error(`Fetch error: ${error.message}`, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Slide,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!sector || !criteria || !criteriaValue) {
      return toast.warn('Please fill all the fields', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Slide,
      });
    }

    const body = {
      filter: "sector",
      filterValue: sector,
      criteria: criteria,
      criteriaValue: criteriaValue,
    };

    try {
      const response = await fetch('/api/data/filter', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }

      const result = await response.json();

      // Log the raw response to see what is being returned
      console.log('Raw response:', result);

      if (Array.isArray(result.data)) {
        setData(result.data);
        toast.success('Data fetched successfully', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Slide,
        });
      } else {
        throw new Error('Fetched data is not an array');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      toast.error(`Error fetching data: ${error.message}`, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Slide,
      });
    }

    // Reset the form fields
    setSector('');
    setCriteria('');
    setCriteriaValue('');
  };

  useEffect(() => {
    fetchData();

    const aggregated = data.reduce((acc, curr) => {
      const sec = curr.sector || "unknown";
      if (!acc[sec]) {
        acc[sec] = 0;
      }
      acc[sec]++;
      return acc;
    }, {});

    const aggregatedArray = Object.keys(aggregated).map((key) => ({
      name: key,
      value: aggregated[key],
    }));

    setAggregatedData(aggregatedArray);
  }, [data]);

  return (
    <div>
      <Box sx={{ mt: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <form onSubmit={handleSubmit}>
          <FormControl sx={{ mb: 3, width: '100%' }}>
            <InputLabel htmlFor="sector-input">Enter Sector</InputLabel>
            <Input
              id="sector-input"
              value={sector}
              onChange={(e) => setSector(e.target.value)}
              aria-describedby="sector-helper-text"
            />
            <FormHelperText id="sector-helper-text">Enter the sector</FormHelperText>
          </FormControl>

          <FormControl sx={{ mb: 3, width: '100%' }}>
            <InputLabel id="criteria-label">Select Criteria</InputLabel>
            <Select
              labelId="criteria-label"
              id="criteria-select"
              value={criteria}
              onChange={(e) => setCriteria(e.target.value)}
            >
              <MenuItem value="country">Country</MenuItem>
              <MenuItem value="topic">Topic</MenuItem>
              <MenuItem value="region">Region</MenuItem>
              <MenuItem value="intensity">Intensity</MenuItem>
              <MenuItem value="likelihood">Likelihood</MenuItem>
              <MenuItem value="relevance">Relevance</MenuItem>
            </Select>
            <FormHelperText>Select the criteria to update sector</FormHelperText>
          </FormControl>

          <FormControl sx={{ mb: 3, width: '100%' }}>
            <InputLabel htmlFor="criteria-value-input">Enter Criteria Value</InputLabel>
            <Input
              id="criteria-value-input"
              value={criteriaValue}
              onChange={(e) => setCriteriaValue(e.target.value)}
              aria-describedby="criteria-value-helper-text"
            />
            <FormHelperText id="criteria-value-helper-text">Enter the value for the selected criteria</FormHelperText>
          </FormControl>

          <Button type="submit" variant="outlined" color="primary">
            Add +
          </Button>
        </form>
      </Box>

      <Box sx={{ mt: 5, width: '100%', height: 600 }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={aggregatedData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={150}
              outerRadius={250}
              fill="#8884d8"
            >
              {aggregatedData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </Box>
    </div>
  );
};

export default SectorFilter;
