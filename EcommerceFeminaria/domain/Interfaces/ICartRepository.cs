﻿using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Interfaces
{
    public interface ICartRepository : IBaseRepository<Cart>
    {
        public Cart ChangeCartState(User user);
        public Cart? GetCartByUserId(int userId);

        public Cart AddBookToUserCart(User user, Book book);

        public List<Cart> GetClientPurchases(User user);

        public Cart RemoveBookFromUserCart(User user, Book book);
    }
}
