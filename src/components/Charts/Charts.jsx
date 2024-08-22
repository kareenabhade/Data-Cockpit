import React, { useEffect, useState } from 'react';
import Sector from './Sector'
import Intensity from './Intensity'
import Topic from './Topic'
import Region from './Region';
import { Box, Grid } from '@mui/material';
import LikelihoodChart from './LikelihoodCharts';
import RelevanceBySectorChart from './Relevance';

const Charts = () => {
    const [sectorData, setSectorData] = useState([]);
    const [topicData, setTopicData] = useState([]);
    const [intensityData, setIntensityData] = useState([]);
    const [regionData, setRegionData] = useState([]);
    const [likelihoodData, setLikelihoodData] = useState([]);
    const [relevanceData, setRelevanceData] = useState([]);
  

 const fetchData = async () => {
        try {
            const response = await fetch('/api/data');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const info = await response.json();
            aggregateSectorData(info);
            aggregateTopicData(info);
            aggregateIntensityDataByCountry(info);
            aggregatedRegionData(info);
            aggregateLikelihoodDataByInsight(info);
            aggregateRelevanceDataBySector(info);
        } catch (error) {
            console.error('Fetch error:', error);
        }
    };

const aggregateSectorData = (data) => {
        const aggregation = data.reduce((acc, curr) => {
            const sector = curr.sector || 'Unknown';
            acc[sector] = (acc[sector] || 0) + 1;
            return acc;
        }, {});

        const formattedData = Object.keys(aggregation).filter(key => aggregation[key] < 150).map(key => ({
            name: key,
            number: aggregation[key]
        }));

        setSectorData(formattedData);
};

const aggregateTopicData = (data) => {
        const aggregation = data.reduce((acc, curr) => {
            const topic = curr.topic || 'Unknown';
            acc[topic] = (acc[topic] || 0) + 1;
            return acc;
        }, {});

        const formattedData = Object.keys(aggregation).filter(key => aggregation[key] < 10).map(key => ({
            name: key,
            total: aggregation[key]
        }));

        setTopicData(formattedData);
    };

const aggregateIntensityDataByCountry = (data) => {
        const aggregation = data.reduce((acc, curr) => {
            const country = curr.country || 'Unknown';
            const intensity = curr.intensity || 0;

            if (!acc[country]) {
                acc[country] = { totalIntensity: 0, count: 0 };
            }

            acc[country].totalIntensity += intensity;
            acc[country].count++;

            return acc;
        }, {});

        const formattedData = Object.keys(aggregation).map(key => ({
            name: key,
            intensity: aggregation[key].totalIntensity / aggregation[key].count // Calculate average intensity per country
        }));

        setIntensityData(formattedData)
};


 const aggregatedRegionData = (data)=>{ 
        const aggregation = data.reduce((acc, item) => {
        const region = item.region || 'Unknown';
        if (!acc[region]) {
            acc[region] = 0;
        }
        acc[region]++;
        return acc;
    }, {});

  // Convert the aggregated data into an array suitable for the PieChart
   const formattedtData = Object.keys(aggregation).map(region => ({
       name: region,
        number: aggregation[region]
    }));

    setRegionData(formattedtData);

    }


const aggregateLikelihoodDataByInsight = (data) => {
  const aggregation = data.reduce((acc, curr) => {
    const insight = curr.insight || 'Unknown';
    const likelihood = curr.likelihood || 0;
    
    if (!acc[insight]) {
      acc[insight] = { totalLikelihood: 0, count: 0 };
    }
    
    acc[insight].totalLikelihood += likelihood;
    acc[insight].count += 1;
    
    return acc;
  }, {});

  const formattedData = Object.keys(aggregation).map(key => ({
    insight: key,
    avgLikelihood: aggregation[key].totalLikelihood / aggregation[key].count
  }));

  setLikelihoodData(formattedData);
};


const aggregateRelevanceDataBySector = (data) => {
  const aggregation = data.reduce((acc, curr) => {
    const sector = curr.sector || 'Unknown';
    const relevance = curr.relevance || 0;

    if (!acc[sector]) {
      acc[sector] = { totalRelevance: 0, count: 0 };
    }

    acc[sector].totalRelevance += relevance;
    acc[sector].count += 1;

    return acc;
  }, {});

  const formattedData = Object.keys(aggregation).map(key => ({
    sector: key,
    avgRelevance: aggregation[key].totalRelevance / aggregation[key].count
  }));

  setRelevanceData(formattedData);
};


    useEffect(() => {
        fetchData();
    }, [sectorData, topicData, intensityData, likelihoodData, regionData, relevanceData]);



  return (
        <Box sx={{    ml:{md:20, xs:2}, mr:{md:20, xs:2}, p:5, 
                      backgroundColor:'#DBDFEA', 
                      borderRadius:'20px', 
                      display:'flex',
                      justifyContent:'center',
                      alignItems:'center',
                      flexDirection:'column' }} >
            <Grid container spacing={5} sx={{display:'flex', justifyContent:'center'}}>
               <Grid item xs={12} md={10} lg={6}>
                    <Sector data={sectorData} topic='Sector' />
               </Grid>
               <Grid item xs={12} md={10} lg={6}>
                    <Topic data={topicData} topic='Topic' />
               </Grid>
               <Grid item xs={12} md={10} lg={6}>
                    <RelevanceBySectorChart data={relevanceData} />
               </Grid>
               <Grid item xs={12} md={10} lg={6}>
                    <Intensity data={intensityData} topic="Intensity" />
               </Grid>
            </Grid>
            <Region data={regionData} />
            <LikelihoodChart data={likelihoodData}  /> 
        </Box>
    );
};

export default Charts;
