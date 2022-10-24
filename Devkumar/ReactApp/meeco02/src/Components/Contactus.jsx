import "../index.css";

function Contactus() {
  return (
    <div className='container'>
      <form className='col-md-6'>
        <div className='form__group'>
          <i class='btn__icon fa-solid fa-user'></i>
          <input className='form__control' type='text' placeholder='Name' />
        </div>
        <div className='form__group'>
          <i class='btn__icon fa-solid fa-envelope'></i>
          <input className='form__control' type='text' placeholder='Email' />
        </div>
        <div className='form__group'>
          <i class='btn__icon fa-solid fa-phone'></i>
          <input className='form__control' type='text' placeholder='Phone' />
        </div>
        <div className='form__group'>
          <textarea
            class='form__control'
            rows='3'
            placeholder='Message'
          ></textarea>
        </div>
      </form>

      <div className='col-md-6'>
        {/* <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d971.7618137500453!2d77.65094110412194!3d13.032662789634372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17348fe7416b%3A0x1a6c4867314e02db!2sSt.Vincent%20Pallotti%20School!5e0!3m2!1sen!2sin!4v1666607925529!5m2!1sen!2sin'
            width='400'
            height='300'
            style='border:0;'
            allowfullscreen=''
            loading='lazy'
            referrerpolicy='no-referrer-when-downgrade'
          ></iframe> */}
      </div>
    </div>
  );
}

export default Contactus;
