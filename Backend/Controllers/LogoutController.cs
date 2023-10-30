using Microsoft.AspNetCore.Mvc;

// Define the controller as an API controller and set its route
[ApiController]
[Route("api/logout")]
public class LogoutController : ControllerBase
{
    // Define a POST action for the logout operation
    [HttpPost]
    public IActionResult Logout()
    {
        return Ok(new { message = "Successfully logged out" });
    }
}
