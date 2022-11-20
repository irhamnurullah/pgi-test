import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../components/loading';
import Search from '../components/search';

function Home() {
  const url = process.env.REACT_APP_URL;
  const [jobs, setJobs] = useState([]);
  const [jobDesc, setJobDesc] = useState('');
  const [location, setLocation] = useState('');
  const [loading, setLoading] = useState(true);

  function handleJobDescChange(e) {
    setJobDesc(e.target.value);
  }

  function handleLocationChange(e) {
    setLocation(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await axios.get(url, {
        params: {
          description: jobDesc,
          location: location,
        },
      });

      setJobs(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setJobDesc('');
      setLocation('');
      setLoading(false);
    }
  }

  async function getJobLists() {
    try {
      setLoading(true);
      const response = await axios.get(url);
      setJobs(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  function removeSpecifiedChar(str) {
    const specifiedChar = str.replace('(m/w/d)');
    return specifiedChar;
  }

  useEffect(() => {
    getJobLists();
  }, []);

  return (
    <div className="space-y-4 pt-8 pb-20">
      <Search
        handleJobDescChange={handleJobDescChange}
        handleLocationChange={handleLocationChange}
        jobDesc={jobDesc}
        location={location}
        onSubmit={handleSubmit}
      />

      <article className="p-8 bg-white rounded-lg shadow-md">
        <h1 className="font-bold text-xl mb-3">Job List</h1>
        <ul className="space-y-4">
          {loading ? (
            <Loading />
          ) : jobs.length === 0 ? (
            <div>
              <p>Jobs not Found</p>

              <button onClick={() => window.location.reload()}>back to home</button>
            </div>
          ) : (
            jobs.map((job, index) => {
              return (
                <li key={index}>
                  <Link to={`/detail/${job.id}`}>
                    <div className="border-y py-3 px-2 hover:border hover:rounded w-full duration-150">
                      <h3 className="font-bold block text-blue-700">
                        {removeSpecifiedChar(job.title)}
                      </h3>
                      <span>
                        {job.company} -{' '}
                        <span className="text-green-500 font-semibold">{job.type}</span>
                      </span>
                    </div>
                  </Link>
                </li>
              );
            })
          )}
        </ul>
      </article>
    </div>
  );
}

export default Home;
