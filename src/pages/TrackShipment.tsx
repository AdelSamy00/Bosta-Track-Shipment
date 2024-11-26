import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import './styles/TrackShipment.css';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setShipment } from '../redux/ShipmentSlice';
import Progress from '../components/Progress';
import DetailsTable from '../components/DetailsTable';

function TrackShipment() {
  const [data, setData] = useState(null);
  const [trackingNumber, setTrackingNumber] = useState('84043113');
  const dispatch = useDispatch();
  const { t } = useTranslation();
  useEffect(() => {
    async function trackShipment() {
      await axios
        .get(`https://tracking.bosta.co/shipments/track/${trackingNumber}`)
        .then((res) => {
          console.log(res.data);
          setData(res.data);
          dispatch(setShipment(res.data));
        })
        .catch((e) => {
          console.log(e);
        });
    }

    trackShipment();
  }, [trackingNumber]);
  return (
    <div>
      <Header setTrackingNumber={setTrackingNumber} />
      {data && (
        <div className="main">
          <Progress />
          <div className="TrackShipmentContent">
            <div className="TrackShipmentTable">
              <h4>{t('shipmentDetails')}</h4>
              <DetailsTable />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TrackShipment;
