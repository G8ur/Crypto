import React from 'react'
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import Loader from './Loader';

const {Text, Title} = Typography;
const {Option} = Select;

const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';


const News = ({simplified}) => {
  const count = simplified ? 6 : 12;
  // const {data:cryptoNews} = useGetCryptoNewsQuery({newsCategory:'Cryptocurrency',count:simplified ? 10: 100});
  const {data:cryptoNews} = useGetCryptoNewsQuery(count);

   console.log(cryptoNews)
  
  if(!cryptoNews?.data) return <Loader />

  return (
    <Row gutter={[24,24]}>
      {cryptoNews.data.map((news , i)=>(
        <Col xs={24} sm={12} lg={8} key={i} >
          <Card hoverable className='news-card' >
            <a href={news.url} target='_blank' rel='noreferrer'>
              <div className='news-image-container'>
                <Title className="news-title" level={4} >
                  {news.title} 
{/* for news here the news */}

                </Title>
                <img src={news?.thumbnail|| demoImage} alt="news" width="50" height="60" />
              </div>
              <p>
              {news.description.length > 100 ? `${news.description.substring(0, 100)}...` : news.description}
              </p>
              <div className="provider-container">
                <div>
                  {/* <Avatar src={news.provider[0]?.thumbnail || demoImage} alt="" />
                  <Text className="provider-name">{news.provider[0]?.name}</Text> */}
                </div>
                <Text>{moment(news.createdAt).startOf('ss').fromNow()}</Text>
              </div>
            </a>
          </Card>
        </Col>

      ))}

    </Row>
    
  )
}

export default News
