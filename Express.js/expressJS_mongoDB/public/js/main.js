$(document).ready(function () {

  // Top navbar control
  // Add active class to the opened window
  $(`.nav-link[href="${location.pathname}"]`).addClass('active');

  // Contacts handling
  $('.contact-form').submit(function (event) {
    event.preventDefault();
    let data = $(this).serialize(),
      url = event.target.baseURI;
    makePost(url, data);
  });

  $('.delete-contact').click(function (event) {
    let id = $(event.target).parents('tr')[0].id,
      url = event.target.baseURI;
    makeDelete(url, id);
  });

  $('.edit-contact').click(function (event) {
    let row = $(event.target).parents('tr')[0],
      number = row.children[0].innerText,
      name = row.children[1].innerText,
      email = row.children[2].innerText,
      modal = $('#modal-edit-contact').modal('show');
    modal.find('.modal-contact-title')[0].innerText = `Edit contact n° ${number}`;
    modal.find('form input[name="name"]').val(name);
    modal.find('form input[name="email"]').val(email);

    modal.find('.save-edit-contact').click(function () {
      let url = event.target.baseURI,
        data = modal.find('form').serialize(),
        id = row.id;
      makePut(url, data, id);
    });
  });

  /* Email client handling */
  $('.send-email').click(function (event) {
    let attachments = [],
      attachments_size = 0,
      row = $(event.target).parents('tr')[0],
      email = row.children[2].innerText,
      modal = $('#modal-email-client').modal('show');
    modal.find('.modal-contact-title')[0].innerText = `To: ${email}`;

    // To clear all values on hide of this modal.
    modal.on('hidden.bs.modal', function (e) {
      attachments = [];
      $('#email-attachments').empty();
    })

    // On select files add them as attachments to the email.
    $('#email_attach_file').change(function (e) {

      ADD_FILES: for (const file of e.target.files) {
        if (!attachments.some(fileName => fileName.name === file.name)) {
          //Verify if the total size is less than 10 Megabytes.
          if (attachments_size < 10485760 && file.size < 10485760) {
            attachments_size += file.size;
            attachments.push(file);
            renderAttachmentsView();
          } else {
            alert('The attachments must not exceed 10 Mb');
            break ADD_FILES;
          }
        }
      }

      function renderAttachmentsView() {
        let email_attachments = $('#email-attachments').empty();
        attachments.forEach(attachment => {
          let filename = attachment.name;

          if (filename.length > 25) {
            filename = filename.slice(0, 25).concat('...');
          }
          email_attachments.append(
            $(`<li class="list-group-item">${filename}
              <span> ${(attachment.size / 1024 / 1024).toFixed(2) + 'Mb'} 
              </span></li>`)
              // Add the event to delete itself from the list.
              .on('click', function () {

                let index = attachments.findIndex((file) => {
                  return file.name === attachment.name
                });
                attachments.splice(index, 1);
                renderAttachmentsView();
              }));
        })
      }
    });

    /* On click for button send email  */
    modal.find('.send-email-to').click(async function (event) {
      let data = modal.find('form').serialize(),
        url = event.target.baseURI;

      let files = await Promise.all(attachments.map(file => {
        return encFileToBase64(file);
      }));

      /*  To add more data to the request */
      data = data.concat(
        `&to=${email}`,
        `&files${$.param({ '': JSON.stringify(files) })}`
      );
      sendEmail(url + '/email', data, url);
    });
  });

  /* To encode files in base64 strings */
  function encFileToBase64(file) {

    return new Promise((resolve, reject) => {
      let reader = new FileReader();
      reader.onload = () => {
        return resolve({
          encoding: "base64",
          filename: file.name,
          content: reader.result.split(",")[1]
        });
      }
      reader.readAsDataURL(file);
    })
  }

});
