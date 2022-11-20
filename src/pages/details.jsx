import axios from 'axios';
import { Interweave } from 'interweave';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loading from '../components/loading';

export default function Details() {
  const [detailData, setDetailData] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = `http://dev3.dansmultipro.co.id/api/recruitment/positions/`;
  const param = useParams();
  const id = param.id;

  async function getDetail() {
    try {
      setLoading(true);
      const response = await axios.get(url + id);
      setDetailData(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getDetail();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="py-4">
          <Link to={'/'}>
            <button className="px-2 py-1 rounded-lg border">back</button>
          </Link>
          <div className="p-4 bg-white rounded shadow-sm mt-4">
            <div className="py-2 border-b">
              <h2>
                {detailData.type} / {detailData.location}
              </h2>
              <h1 className="font-bold text-xl">{detailData.title}</h1>
            </div>

            <article className="flex items-start justify-around w-full mt-4 space-x-8">
              <Interweave content={detailData.description} />
              <div className="border w-3/4 p-2 space-y-8">
                <div>
                  <h3 className="font-bold">{detailData.company}</h3>
                  <img src={detailData.company_logo} alt={detailData.company} />
                  <a
                    href={detailData.company_url}
                    target="__blank"
                    className="text-blue-300 hover:underline"
                  >
                    {detailData.company_url}
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold text-lg">How to Apply</h3>
                  <span>apply directly at</span>
                  <br />
                  <a
                    href={detailData.url}
                    target="__blank"
                    className="text-blue-300 hover:underline"
                  >
                    {detailData.url}
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      )}
    </>
  );
}
