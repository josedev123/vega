using AutoMapper;
using vega.Controllers.Resources;
using vega.Models;

namespace vega.Migrations
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Make, MakeResource>();
            CreateMap<Model, ModelResource>();
        }
    }
}