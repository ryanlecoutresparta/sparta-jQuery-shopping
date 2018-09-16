$(document).ready(function(){

  $('#shoppingForm').on('submit', function(e) {
    var textInput = $('#addToList').val();
    var pickedShop = $('.shop option:selected').val();
    switch (pickedShop) {

      case 'shop_1':
      $('.shoppingList1').append($('<li class="list-item">').append(textInput));
      $('.shoppingList1').css('padding-left', '0px');
      $('#addToList').val('');
      e.preventDefault();
      break;

      case 'shop_2':
      $('.shoppingList2').append($('<li class="list-item">').append(textInput));
      $('.shoppingList2').css('padding-left', '0px');
      $('#addToList').val('');
      e.preventDefault();
      break;

      case 'shop_3':
      $('.shoppingList3').append($('<li class="list-item">').append(textInput));
      $('.shoppingList3').css('padding-left', '0px');
      $('#addToList').val('');
      e.preventDefault();
      break;

      case 'shop_4':
      $('.shoppingList4').append($('<li class="list-item">').append(textInput));
      $('.shoppingList4').css('padding-left', '0px');
      $('#addToList').val('');
      e.preventDefault();
      break;

      default:
      alert('pick a shop!');
    };


    $('.list-item').dblclick(function(e){
      $(this).fadeOut(1000);
    });
  });
})
