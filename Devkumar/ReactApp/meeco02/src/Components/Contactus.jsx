function Contactus() {
  return (
    <div className='form__container'>
      <form>
        <div className='form__group'>
          <i class='fa-solid fa-user'></i>
          <input className='form__control' type='text' placeholder='Name' />
        </div>
        <div className='form__group'>
          <i class='fa-solid fa-envelope'></i>
          <input className='form__control' type='text' placeholder='Email' />
        </div>
        <div className='form__group'>
          <i class='fa-solid fa-phone'></i>
          <input className='form__control' type='text' placeholder='Phone' />
        </div>
        <div className='form__group'>
          <i class='fa-solid fa-message'></i>
          <input className='form__control' type='text' placeholder='Message' />
        </div>
      </form>

      <div></div>
      <h1>Hello World</h1>
    </div>
  );
}

export default Contactus;
