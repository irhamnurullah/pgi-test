import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Loading from '../components/loading';
import Search from '../components/search';
import { findJobs, getJobs } from '../state/actionCreators';

function Home() {
  const { jobs } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [field, setField] = useState({
    jobDesc: '',
    location: '',
  });

  useEffect(() => {
    dispatch(getJobs());
  }, [dispatch]);

  function handleChange(e) {
    setField({
      ...field,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    try {
      dispatch(findJobs(field.jobDesc, field.location));
    } catch (error) {
      console.log(error);
    }

    e.target.reset();
  }

  function removeSpecifiedChar(str) {
    const specifiedChar = str.replace('(m/w/d)');
    return specifiedChar;
  }

  return (
    <div className="space-y-4 pt-8 pb-20">
      <Search onSubmit={handleSubmit} onChange={handleChange} />

      <article className="p-8 bg-white rounded-lg shadow-md">
        <h1 className="font-bold text-xl mb-3">Job List</h1>
        <ul className="space-y-4">
          {jobs.loading ? (
            <Loading />
          ) : jobs.data.length === 0 ? (
            <div>
              <p>Jobs not Found</p>

              <button onClick={() => window.location.reload()}>back to home</button>
            </div>
          ) : (
            jobs.data.map((job, index) => {
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
