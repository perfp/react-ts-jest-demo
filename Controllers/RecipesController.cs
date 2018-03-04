using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Web; 

namespace recipe_react.Controllers
{
    [Route("api/[controller]")]
    public class RecipesController : Controller
    {

        
        public async Task<IList<Recipe>> Get(){

            var list = new []{
                new Recipe { Name="Lasagnesamosa" },
                new Recipe { Name="Ice Cube Pie" }
            };

            return list;
        }
    }

    public class Recipe {
        public string Name {get;set;}
    }
}