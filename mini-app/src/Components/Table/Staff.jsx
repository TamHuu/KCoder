import { useEffect, useState, } from 'react';
import Table from 'react-bootstrap/Table';
import dayjs from 'dayjs';

function TableStaff() {
  const [data, setData] = useState([])
  console.log(">>>>dtaa", data);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      try {
        const response = await fetch('https://625bc40450128c5702072d2c.mockapi.io/product')
        if (!response.ok) {
          throw new Error("Network response was not ok")
        }
        const result = await response.json();
        setLoading(false)
        setData(result);
      } catch (error) {
         throw new Error("Error:",error)
      
      }
      finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [])



  return (
    <div className='container'>
      {loading?(<div className='bg-danger text-white'>Loading</div>):(  <Table striped bordered hover>
        <thead>
          <tr>
            <th>#ID</th>
            <th>Fullname </th>
            <th> DOB</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item) => (
              <tr key={item.name}>
                <td>
                  {item.id}
                </td>
                <td >
                  <div className='d-flex  align-items-center' style={{gap:'20px'}}>
                    <img width={50} height={50} src={item.avatar} alt="#" />
                    <span>
                      {item.name}
                    </span>
                  </div>

                </td>

                <td>{dayjs(item.Dob).format('DD/MM/YYYY')}</td>

                <td>
                  {item.email}
                </td>
                <td>
                  {item.gender ? "Female" : "Male"}
                </td>
                <td>
                  {item.department}
                </td>
              </tr>
            ))
          }
          {/* <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr> */}

        </tbody>
      </Table>)}
    
    </div>

  );
}

export default TableStaff;