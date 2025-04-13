using System;
using System.ComponentModel.DataAnnotations;

namespace API.DTOs;

public class RegisterDto
{
    [Required]
    [MaxLength(100)]
    public string Username { get; set; } = string.Empty;
    [Required]
    [StringLength(64, MinimumLength = 9)]
    public string Password { get; set; } = string.Empty;
}
