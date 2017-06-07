$(document).ready(function() {
  $(document).ready(function() {

    var firstNameInput = $("#entry_1192952359"),
    lastNameInput = $("#entry_506243513"),
    emailInput = $("#entry_918104487"),
    affiliationInput = $("#entry_192968797"),
    researchAreaInput = $("#entry_1998960469");

    var requiredFields = [firstNameInput, lastNameInput, emailInput, affiliationInput, researchAreaInput];

    function noNullFields() {
      var noBlankFields=true;
      requiredFields.forEach(function(data) {
        if (data.val()) {
          data.removeClass("invalid").addClass("valid");
        } else {
          console.log(data);
          data.removeClass("valid").addClass("invalid");
          noBlankFields = false;
        }
      });
      if (!noBlankFields) {
        $('.error-messages').append('<p>Please fill out all required fields</p>');
      }
      return noBlankFields;
    }

    function validateEmailAddress() {
      var email = emailInput.val();
      var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      var valid_email=regex.test(email);
      if(valid_email) {
        emailInput.removeClass("invalid").addClass("valid");
      }
      else {
        emailInput.removeClass("valid").addClass("invalid");
        $('.error-messages').append('<p>Please provide a valid email address</p>');
        validatedEmail = false;
      }
      return valid_email;
    }

    var validated = false;

    $("#form-submit").on("click", function(e) {
      validateForm();
      if (!validated) {
        liveValidateNullFields(requiredFields);
        $('html, body').animate({
          scrollTop: $(".error-messages").offset().top
        }, 200);
        console.log("Form not submitted");
        e.preventDefault();
      } else {
        console.log('Form submitted successfully!');
      }

    });


    function validateForm() {
      $('.error-messages').text("");
      validated = noNullFields(requiredFields) && validateEmailAddress();
    }

    function liveValidateNullFields(requiredFields) {
      requiredFields.forEach(function(field) {
        field.on("input", function() {
          if (!field.val()) {
            $(this).removeClass("valid").addClass("invalid");
          } else {
            $(this).removeClass("invalid").addClass("valid");
          }
        });
      });
    }





  });
});