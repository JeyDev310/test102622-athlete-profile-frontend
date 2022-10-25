import { useEffect, useState } from 'react';
import axios from 'axios';
const List = () => {
  const [list, setList] = useState([]);
  const getList = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API}/api/profiles`);
      console.log(res.data);
      setList(res.data);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    getList()
  }, [])
  return (
    <>
      <div className="w-[80%] min-w-[650px]">
        <div className="overflow-x-auto relative">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Name
                </th>
                <th scope="col" className="py-3 px-6">
                  Sports
                </th>
                <th scope="col" className="py-3 px-6">
                  Gender
                </th>
                <th scope="col" className="py-3 px-6">
                  Birthday
                </th>
                <th scope="col" className="py-3 px-6">
                  About
                </th>
              </tr>
            </thead>
            <tbody>
              {list && list.map((item, idx) => 
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={idx}>
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {item.name}
                </th>
                <td className="py-4 px-6">
                  {item.sports.join(", ")}
                </td>
                <td className="py-4 px-6">
                  {item.gender}
                </td>
                <td className="py-4 px-6">
                  {item.birthday}
                </td>
                <td className="py-4 px-6">
                  {item.about}
                </td>
              </tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default List;