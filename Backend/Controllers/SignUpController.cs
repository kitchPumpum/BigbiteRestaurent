using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using System.Data;

namespace Backend.Controllers
{
    [Route("api/signup")]
    [ApiController]
    public class SignUpController : ControllerBase
    {
        private IConfiguration _configuration;
        public SignUpController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpPost]
        [Route("")]

        public async Task<ActionResult> AddDetails([FromForm] string FirstName, [FromForm] string LastName, [FromForm] string Phone, [FromForm] string Email,
           [FromForm] string Password, [FromForm] string street, [FromForm] string city, [FromForm] string state, [FromForm] string zip)
        {

            string query = "exec SP_Save_SignUp @FirstName,@LastName,@Phone,@Email,@Password,@street,@city,@state,@zip,@name";
            DataTable table = new DataTable();
            string sqlDatasource = _configuration.GetConnectionString("BackendConnectionString");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDatasource))
            {

                string name = "USER";
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {

                    myCommand.Parameters.AddWithValue("@FirstName", FirstName);
                    myCommand.Parameters.AddWithValue("@LastName", LastName);
                    myCommand.Parameters.AddWithValue("@Phone", Phone);
                    myCommand.Parameters.AddWithValue("@Email", Email);
                    myCommand.Parameters.AddWithValue("@Password", Password);
                    myCommand.Parameters.AddWithValue("@street", street);
                    myCommand.Parameters.AddWithValue("@city", city);
                    myCommand.Parameters.AddWithValue("@state", state);
                    myCommand.Parameters.AddWithValue("@zip", zip);
                    myCommand.Parameters.AddWithValue("@name", name);

                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    if (table != null && table.Rows.Count > 0)
                    {
                        if (table.Rows[0]["Status"].ToString().Trim() == "Success")
                        {
                            return new JsonResult("Successfully Signin");
                        }
                        else
                        {
                            return this.BadRequest(new { error = "Signin Failed" });
                        }

                    }
                    else
                    {
                        return this.BadRequest(new { error = "Signin Failed" });
                    }
                    myReader.Close();
                    myCon.Close();
                }

            }
            return new JsonResult(false);
        }
    }
}
