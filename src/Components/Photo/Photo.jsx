import React, { use } from 'react';
import useFetch from '../../Hooks/useFetch';

const Photo = () => {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    const{url, options} = PHOTO_GET(id);
    request(url, options);
  }, [id, request]);
  

  return <div>{id}</div>;
};

export default Photo;
