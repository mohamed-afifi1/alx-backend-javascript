export default function createReportObject(employeesList) {
  return {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(all) {
      return Object.keys(all).length;
    },
  };
}
