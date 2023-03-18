import { useState } from "react";

const data = [
  {
    employeeId: "01",
    name: "John Doe",
    email: "johndoe@email.com",
    position: "Frontend Developer",
  },
  {
    employeeId: "02",
    name: "Sara",
    email: "sara@email.com",
    position: "HR Executive",
  },
  {
    employeeId: "03",
    name: "Mike",
    email: "mike@email.com",
    position: "Backend Developer",
  },
];

const EditableTable = () => {
  const [employeeData, setEmployeeData] = useState(data);

  const onChangeInput = (e, employeeId) => {
    const { name, value } = e.target;

    const editData = employeeData.map((item) =>
      item.employeeId === employeeId && name ? { ...item, [name]: value } : item
    );

    setEmployeeData(editData);
  };

  const submitData = (employeeId) => {
    const idData = employeeData.find((item) => item.employeeId === employeeId);
    console.log("====================================");
    console.log(idData);
    console.log("====================================");
  };

  return (
    <>
      <div className="bg-slate-600 h-[100vh]">
        <div className="flex justify-center m-50">
          <table className="bg-white">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Position</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {employeeData.map(({ employeeId, name, email, position }) => (
                <tr key={employeeId}>
                  <td>
                    <input
                      name="name"
                      value={name}
                      type="text"
                      onChange={(e) => onChangeInput(e, employeeId)}
                      placeholder="Type Name"
                    />
                  </td>
                  <td>
                    <input
                      name="email"
                      value={email}
                      type="text"
                      onChange={(e) => onChangeInput(e, employeeId)}
                      placeholder="Type Email"
                    />
                  </td>
                  <td>
                    <input
                      name="position"
                      type="text"
                      value={position}
                      onChange={(e) => onChangeInput(e, employeeId)}
                      placeholder="Type Position"
                    />
                  </td>
                  <td>
                    <button onClick={() => submitData(employeeId)}>Edit</button>
                    <button>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default EditableTable;
