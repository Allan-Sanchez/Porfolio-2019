<template>
    <div id="contact" class=" container-inner contact">
        <div class=" md:mt-32 md:flex justify-center">
          <div class=" text-center text-blue font-bold text-3xl">
            <span class="px-6 py-2 border-b-2">Contact</span>
          </div>
        </div>
        <div class="md:flex justify-center mt-8 md:mb-10">
          <form class=" bg-background-ternary shadow-2xl rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
              <label class="block text-copy-ternary text-sm font-bold mb-2" for="Name">
                Name
              </label>
              <input  class=" bg-background-primary shadow appearance-none rounded w-full py-2 px-3 text-copy-ternary leading-tight focus:outline-none focus:shadow-outline" id="Name" type="text" autofocus   placeholder="Type name">
            </div>
            <div class="mb-4">
              <label class="block text-copy-ternary text-sm font-bold mb-2" for="email">
                E-mail
              </label>
              <input class="bg-background-primary shadow appearance-none  rounded w-full py-2 px-3 text-copy-ternary leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Type E-mail">
            </div>
            <div class="mb-6">
              <label class="block text-copy-ternary text-sm font-bold mb-2" for="mensage">
                Message
              </label>
              <textarea class=" bg-background-primary shadow  appearance-none rounded w-full py-2 px-3 text-copy-ternary mb-3 leading-tight focus:outline-none focus:shadow-outline" name="mensage" id="mensage" cols="50" rows="4" placeholder="Type message"></textarea>
            </div>
            <div class="flex items-center justify-end">
              <button class="bg-blue hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Send
              </button>
            </div>
          </form>

        </div>
      </div>
</template>