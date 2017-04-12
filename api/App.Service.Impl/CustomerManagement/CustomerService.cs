namespace App.Service.Impl.CustomerManagement
{
    using System.Collections.Generic;
    using System;
    using App.Common.DI;
    using App.Repository.CustomerManagement;
    using App.Service.CustomerManagement;
    using App.Common;
    using Entity.CustomerManagement;
    using App.Common.Helpers;
    using App.Common.Validation;
    using App.Common.Data;
    using Context;

    internal class CustomerService : ICustomerService
    {
        public CreateCustomerResponse Create(CreateCustomerRequest request)
        {
            this.ValidateCreateCustomerRequest(request);
            using (App.Common.Data.IUnitOfWork uow = new App.Common.Data.UnitOfWork(new App.Context.AppDbContext(IOMode.Write)))
            {
                ICustomerRepository cusRepository = IoC.Container.Resolve<ICustomerRepository>(uow);
                Customer item = new Customer(request.Name, request.Location);
                cusRepository.Add(item);
                uow.Commit();
                return ObjectHelper.Convert<CreateCustomerResponse>(item);
            }
        }

        private void ValidateCreateCustomerRequest(CreateCustomerRequest request)
        {
            IValidationException validationException = ValidationHelper.Validate(request);
            ICustomerRepository repo = IoC.Container.Resolve<ICustomerRepository>();
            if (repo.IsNameExisted(request.Name))
            {
                validationException.Add(new App.Common.Validation.ValidationError("customerManagement.addOrUpdateCustomer.validation.nameAlreadyExisted"));
            }
            validationException.ThrowIfError();
        }

        public GetCustomerResponse GetCustomer(Guid id)
        {
            ICustomerRepository customerRepo = IoC.Container.Resolve<ICustomerRepository>();
            return customerRepo.GetById<GetCustomerResponse>(id.ToString());
        }

        public IList<CustomerListItem> GetCustomers()
        {
            ICustomerRepository customerRepo = IoC.Container.Resolve<ICustomerRepository>();
            return customerRepo.GetCustomers<CustomerListItem>();
        }

        public void Update(UpdateCustomerRequest request)
        {
            this.ValidateUpdateCustomerRequest(request);
            using (IUnitOfWork uow = new UnitOfWork(new AppDbContext(IOMode.Write)))
            {
                ICustomerRepository repo = IoC.Container.Resolve<ICustomerRepository>(uow);
                Customer customer = repo.GetById(request.Id.ToString());
                customer.Name = request.Name;
                customer.Location = request.Location;
                repo.Update(customer);
                uow.Commit();
            }
        }

        private void ValidateUpdateCustomerRequest(UpdateCustomerRequest request)
        {
            IValidationException validationException = ValidationHelper.Validate(request);
            ICustomerRepository repo = IoC.Container.Resolve<ICustomerRepository>();
            Customer item = repo.GetById(request.Id.ToString());
            if (item == null)
            {
                validationException.Add(new App.Common.Validation.ValidationError("customerManagement.addOrUpdateCustomer.validation.invalidId"));
            }

            if (repo.IsNameExisted(request.Name, request.Id.ToString()))
            {
                validationException.Add(new App.Common.Validation.ValidationError("customerManagement.addOrUpdateCustomer.validation.nameAlreadyExisted"));
            }
            validationException.ThrowIfError();
        }
    }
}
