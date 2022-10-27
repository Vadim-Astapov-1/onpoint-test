import './Description.css';

function Description() {
  function mouseMove(evt) {

  }

  return (
    <section className='description'>
      <div className='description__container'>
        <h2 className='description__title'>Текст сообщения</h2>
        <div className='description__wrapper' onTouchMove={mouseMove}>
          <div className='description__container-wrapper'>
            <p className='description__text'>
              <span className='description__span-accent'>Lorem ipsum dolor sit amet,</span>{' '}
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Duis ut diam quam nulla. Mauris in aliquam sem fringilla ut morbi
              tincidunt. Vitae aliquet nec ullamcorper sit amet risus nullam eget felis. Nulla
              pharetra diam sit amet nisl. Eget nulla facilisi etiam dignissim diam quis enim
              lobortis. Est sit amet facilisis magna. Neque laoreet suspendisse interdum consectetur
              libero id. Nec ullamcorper sit amet risus nullam eget felis eget. Mollis aliquam ut
              porttitor leo a diam sollicitudin tempor id. Euismod quis viverra nibh cras pulvinar
              mattis nunc. Massa massa ultricies mi quis. Sit amet massa vitae tortor condimentum
              lacinia. Et malesuada fames ac turpis egestas integer eget. Elementum pulvinar etiam
              non quam lacus suspendisse faucibus interdum posuere.<br></br>
              <br></br>Amet justo donec enim diam vulputate ut pharetra sit. Risus ultricies
              tristique nulla aliquet enim tortor at auctor. Velit sed ullamcorper morbi tincidunt
              ornare massa. Quis hendrerit dolor magna eget est lorem ipsum. Etiam dignissim diam
              quis enim. Gravida neque convallis a cras. Ut enim blandit volutpat maecenas volutpat.
              Mauris sit amet massa vitae tortor condimentum lacinia quis vel.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Description;
