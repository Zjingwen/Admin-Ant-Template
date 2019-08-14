import Loadable from 'react-loadable';

function Loading (){
  const STYLE = {
    width: '100%',
    height: '100%',
    textAlign: 'center',
  };

  return <div style={STYLE}>
    ...loading...
  </div>;
}

export default function(ipt){
  return Loadable({
    loader: () => ipt,
    loading: ()=> {
      return <Loading />;
    },
    delay: 30000,
  });
}

