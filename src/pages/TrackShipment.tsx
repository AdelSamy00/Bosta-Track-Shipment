import { useEffect, useState } from 'react';
import Header from '../components/Header';
import './styles/TrackShipment.css';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setShipment } from '../redux/ShipmentSlice';
import Progress from '../components/Progress';
import DetailsTable from '../components/DetailsTable';
import { Shipment } from '../models/ShipmentDataModel';

function TrackShipment() {
  const [data, setData] = useState<Shipment | null>(null);
  const [trackingNumber, setTrackingNumber] = useState('84043113');
  const dispatch = useDispatch();
  const { t } = useTranslation();
  useEffect(() => {
    async function trackShipment() {
      await axios
        .get(`https://tracking.bosta.co/shipments/track/${trackingNumber}`)
        .then((res) => {
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
            {/* Address and help section */}
            <div className="addressAndHelp">
              <h4>{t('deliveryAddress')}</h4>
              <div className="shipmentAddress">
                {data?.DeliveryAddress
                  ? data.DeliveryAddress
                  : 'امبابة شارع طلعت حرب مدينة العمال بجوار البرنس منزل 17 بلوك 22,,,Cairo'}
              </div>
              <div className="shipmentHelp">
                <img src="/questions.png" alt="Questions" />
                <div className="helpContainer">
                  <p style={{ textAlign: 'center' }}>
                    {t('problemWithShipment')}
                  </p>
                  <button>{t('reportProblem')}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TrackShipment;
