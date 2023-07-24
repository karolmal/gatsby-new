import React from "react";

function Form() {
  return (
    <div>
      <div className="relative isolate px-6 pt-0 lg:px-8">
        <div className="mx-auto max-w-2xl pb-32 sm:pb-48 lg:pb-56">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Add Your Todo
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos,
              aspernatur.
            </p>
            <div className="mt-6 flex items-center justify-center gap-x-6">
              <form class="w-full max-w-md">
                <div class="flex items-center border-b border-indigo-600 py-2">
                  <input
                    class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="text"
                    placeholder="Jane Doe"
                    aria-label="Full name"
                  />
                  <button
                    class="flex-shrink-0 mr-3 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    type="button"
                  >
                    Add Todo List
                  </button>
                  <button
                    class="flex-shrink-0 text-sm font-semibold leading-6 text-gray-900"
                    type="button"
                  >
                    Clear
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
