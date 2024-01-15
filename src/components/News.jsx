import React from 'react'
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';

const {text, title} = Typography;
const {Option} = Select;



const News = ({simplified}) => {
  const count = simplified ? 10 : 100;
  // const {data:cryptoNews} = useGetCryptoNewsQuery({newsCategory:'Cryptocurrency',count:simplified ? 10: 100});
  const {data:cryptoNews, isFetching} = useGetCryptoNewsQuery(count);
  console.log(cryptoNews)
  if (isFetching) return "Loading";
  return (
    <div>
      News 
    </div>
  )
}

export default News
