const { queryFromDB } = require("../../services/dbUtils");

async function getStudentDetails(req, res) {
  try {
    let paginationDetails = req.body.pageDetails;
    let filterDetails = req.body.searchParams;
    let queryParams = {};
    if (filterDetails) {
      if (filterDetails.id) queryParams.id = parseInt(filterDetails.id);
      if (filterDetails.name) queryParams.name = filterDetails.name;
      if (filterDetails.id)
        queryParams.total_marks = parseInt(filterDetails.total_marks);
    }
    let items = paginationDetails.pageSize;
    let page = paginationDetails.pageNumber;
    let studentDetails = await queryFromDB(queryParams, page, items);
    res.json({ studentDetails });
  } catch (error) {
    console.log("Error getting student details", error);
  }
}

module.exports = { getStudentDetails };
