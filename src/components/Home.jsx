import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";
import Cryptocurrencies from "./CryptoCurrencies";
import News from "./News";
const { Title } = Typography;


const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10); // to show top 10 cryptos only

  const globalStats = data?.data?.stats;

  console.log(data)
  if (isFetching) return 'Loading...';
  return (

    <>
      <Title level={2} className="heading">
        Crypto News
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={globalStats.total} />  
          {/* this is done to get all the crypto currency */}
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            value={millify(globalStats.totalExchanges)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market Cap:"
            value={millify(globalStats.totalMarketCap)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24h Volume"
            value={millify(globalStats.total24hVolume)}
          />
        </Col>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={millify(globalStats.totalMarkets)} />
        </Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">Top 10 Cryptos In The World</Title>
        <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show more</Link></Title>
      </div>
      <Cryptocurrencies  simplified={true}/>
      <div className="home-heading-container">
        <Title level={2} className="home-title">Latest crytpo news</Title>
        <Title level={3} className="show-more"><Link to="/news">Show more</Link></Title>
      </div>
      <News simplified={true}/>

    </>
  );
};

export default Homepage;
