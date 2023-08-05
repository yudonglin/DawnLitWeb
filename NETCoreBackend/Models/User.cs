﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace NETCoreBackend.Models;

public class User : AbstractModel
{
    [Display(Name = "name")]
    public string Name { get; set; } = string.Empty;

    [Display(Name = "email")]
    public string Email { get; set; } = string.Empty;

    [Display(Name = "github")]
    public string Github { get; set; } = string.Empty;

    [Display(Name = "group")]
    public int Group { get; set; } = 0;

    [Display(Name = "posts")]
    public ICollection<Post> Posts { get; } = new List<Post>();

    [Display(Name = "likedPosts")]
    public ICollection<Post> LikedPosts { get; } = new List<Post>();

    [Display(Name = "comments")]
    public ICollection<Comment> Comments { get; } = new List<Comment>();

    [Display(Name = "likedComments")]
    public ICollection<Comment> LikedComments { get; } = new List<Comment>();

    [Display(Name = "friends")]
    public ICollection<User> Friends { get; } = new List<User>();

    [Display(Name = "requests")]
    public ICollection<Request> Requests { get; set; } = new List<Request>();

    [Display(Name = "chats")]
    public ICollection<Chat> Chats { get; set; } = new List<Chat>();

    [Display(Name = "coins")]
    public int Coins { get; set; } = 0;

    [Display(Name = "experience")]
    public int Experience { get; set; } = 0;

    [Display(Name = "signature")]
    public string Signature { get; set; } = string.Empty;

    [Display(Name = "about")]
    public string About { get; set; } = string.Empty;

    [Display(Name = "avatar")]
    public string Avatar { get; set; } = string.Empty;

    [Display(Name = "files")]
    public ICollection<FileItem> Files { get; set; } = new List<FileItem>();

    [Display(Name = "banned")]
    public bool Banned { get; set; } = false;

    [NotMapped]
    [Display(Name = "loginIp")]
    public string LoginIp { get; set; } = string.Empty;

    [NotMapped]
    [Display(Name = "newPassword")]
    public string NewPassword { get; set; } = string.Empty;

    [NotMapped]
    [Display(Name = "password")]
    public string Password { get; set; } = string.Empty;

    public Confidential? Confidential { get; set; }
}