﻿using Application.Models;
using Application.Models.Requests;
using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Interfaces
{
    public interface IUserService
    {
       List<User> GetAllUsers();

        UserDto AddNewUser(UserCreateRequest userDto);

        UserDto GetUserByEmail(string email);

     

        void UpdateUser(int id, string password);

        void DeleteUser(int id);
    }
}
