import React, { useState } from "react";
import HTMLReactParser from "html-react-parser";
import { useParams } from "react-router-dom";
import millify from "millify";
import { Col, Row, Typography, Select } from "antd";
import {
  MoneyCollectOutlined,
  DollarCircleOutlined,
  FundOutlined,
  ExclamationCircleOutlined,
  StopOutlined,
  TrophyOutlined,
  CheckOutlined,
  NumberOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";

import { useGetCryptoDetailsQuery } from "../services/cryptoApi";

const { Title, Text } = Typography;
const { Option } = Select;

const CryptoDetails = () => {
  const { coinId } = useParams();
  const [timePeriod, setTimePeriod] = useState("7d");
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
  const cryptodetails = data?.data?.coin
  console.log(data);
  if (isFetching) return 'Loadingg....' 
  // it is imp as important to load data

  const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

  const stats = [
    { title: 'Price to USD', value: `$ ${cryptodetails?.price && millify(cryptodetails?.price)}`, icon: <DollarCircleOutlined /> },
    { title: 'Rank', value: cryptodetails?.rank, icon: <NumberOutlined /> },
    { title: '24h Volume', value: `$ ${cryptodetails?.volume && millify(cryptodetails?.volume)}`, icon: <ThunderboltOutlined /> },
    { title: 'Market Cap', value: `$ ${cryptodetails?.marketCap && millify(cryptodetails?.marketCap)}`, icon: <DollarCircleOutlined /> },
    { title: 'All-time-high(daily avg.)', value: `$ ${cryptodetails?.allTimeHigh?.price && millify(cryptodetails?.allTimeHigh?.price)}`, icon: <TrophyOutlined /> },
  ];

  const genericStats = [
    { title: 'Number Of Markets', value: cryptodetails?.numberOfMarkets, icon: <FundOutlined /> },
    { title: 'Number Of Exchanges', value: cryptodetails?.numberOfExchanges, icon: <MoneyCollectOutlined /> },
    { title: 'Aprroved Supply', value: cryptodetails?.supply?.confirmed ? <CheckOutlined /> : <StopOutlined />, icon: <ExclamationCircleOutlined /> },
    { title: 'Total Supply', value: `$ ${cryptodetails?.supply?.total && millify(cryptodetails?.supply?.total)}`, icon: <ExclamationCircleOutlined /> },
    { title: 'Circulating Supply', value: `$ ${cryptodetails?.supply?.circulating && millify(cryptodetails?.supply?.circulating)}`, icon: <ExclamationCircleOutlined /> },
  ];

  return (
     <Col className="coin-detail-container">
      <Col className="coin-heading-container">
         <Title level={2} className="coin-name">
          {cryptodetails.name} Price
          {/* ({cryptoDetails.slug})  */}
        </Title> 
       <p>
          {cryptodetails.name} live price in inr, view value statistics , market
           cap and supply
         </p>
       </Col>  
      <Select
        defaultValue="7d"
        className="select-timeperiod"
        placeholder="select time period"
        onChange={(value) => setTimePeriod(value)}
      >
        {time.map((date) => <Option key={date}>{date}</Option>)}
      </Select>
    </Col>
  );
};

export default CryptoDetails;
