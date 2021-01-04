export const normalizeData = (dataFromApi) =>{
  let offenseData = [...new Set(dataFromApi.filter((o)=> o.key === 'Offense Count'))];
  
  return offenseData;
}