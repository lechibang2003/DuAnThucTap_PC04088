<template>
    <!-- <router-link to="/product-detail"></router-link> -->

    <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet">
    </head>

    <nav class="bg-white border-gray-200 dark:bg-white fixed top-0 left-0 w-full z-50">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="#" class="flex items-center">
                <img src="#" class="h-8 mr-3" alt="" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-amber-950">Fpoly</span>
            </a>

            <div class="items-center hidden xl:flex md:w-auto md:order-1" id="navbar-search">
                <div class="relative mt-3 xl:hidden">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    </div>
                    <input type="text" id="search-navbar"
                        class="block w-full p-2 pl-10 text-sm text-gray-200 border border-gray-300 rounded-lg bg-gray-50 focus:ring-white-500 focus:border-white-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search...">
                </div>
                <ul
                    class="flex flex-col xl:hidden items-center font-bold p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-white-700 dark:border-gray-700">
                    <li>
                        <a href="#" class="block py-2 pl-3 pr-4 text-amber-950 0 md:p-0 md:hover:text-blue-00"
                            aria-current="page"><i class="bi bi-telephone icon-phone "></i> Home: <br> <span>
                                1900636099</span></a>
                    </li>
                    <li>
                        <a href="#"
                            class="block py-2 pl-3 pr-4 text-amber-950 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-white-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"><i
                                class="bi bi-person icon-navbarhi"></i></a>
                    </li>
                    <li>
                        <a href="#"
                            class="block py-2 pl-3 pr-4 text-amber-950 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-white-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"><i
                                class="bi bi-suit-heart icon-navbarhi"></i></a>
                    </li>
                    <li>
                        <a href="#"
                            class="block py-2 pl-3 pr-4 text-amber-950 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-white-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"><i
                                class="bi bi-basket3 icon-navbarhi"></i></a>
                    </li>
                    <li>
                        <a href="#"
                            class="block py-2 pl-3 pr-4 text-amber-950 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-white-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"><i
                                class="bi bi-share icon-navbarhi"></i></a>
                    </li>
                </ul>
            </div>
            <div class="flex ">
                <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search"
                    aria-expanded="false"
                    class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1">
                    <svg class="w-5 h-5" aria-hidden="true" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                    <span class="sr-only">Search</span>
                </button>
                <div class=" hidden xl:block">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="none"
                            viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                        <span class="sr-only">Search icon</span>
                    </div>
                    <input type="text" id="search-navbarwi"
                        class=" w-full hidden xl:block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search...">
                </div>
                <button data-collapse-toggle="navbar-search" type="button"
                    class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-search" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
            </div>
        </div>
    </nav>

    <nav class="bg-[#594A4E] border-gray-200 dark:bg-[#594A4E] dark:border-gray-700 fixed top-16 left-0 w-full z-50">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
            <a href="#" class="flex items-center">
                <span class="self-center text-2xl hidden xl:block font-semibold whitespace-nowrap dark:text-white"><i
                        class="bi bi-list"></i> Danh Mục Nhóm</span>
            </a>
            <button data-collapse-toggle="navbar-multi-level" type="button"
                class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-multi-level" aria-expanded="false">
                <span class="sr-only">menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M1 1h15M1 7h15M1 13h15" />
                </svg>
            </button>
            <div class="hidden w-full md:block md:w-auto" id="navbar-multi-level">
                <ul
                    class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-amber-850 dark:border-gray-700">
                    <li>
                        <a href="#"
                            class="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-white-400 md:p-0 md:dark:text-white-400 dark:bg-white-600 md:dark:bg-transparent"
                            aria-current="page">Trang chủ</a>
                    </li>
                    <li>
                        <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar"
                            class="flex items-center justify-between w-full py-2 pl-3 pr-4 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0  md:p-0 md:w-auto dark:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Đồ
                            trang trí
                            <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="m1 1 4 4 4-4" />
                            </svg></button>
                        <!-- Dropdown menu -->
                        <div id="dropdownNavbar"
                            class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                            <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                <li>
                                    <a href="#"
                                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">hi</a>
                                </li>
                                <li aria-labelledby="dropdownNavbarLink">
                                    <button id="doubleDropdownButton" data-dropdown-toggle="doubleDropdown"
                                        data-dropdown-placement="right-start" type="button"
                                        class="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dropdown<svg
                                            class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="g" fill="none"
                                            viewBox="0 0 10 6">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2" d="m1 1 4 4 4-4" />
                                        </svg></button>
                                    <div id="doubleDropdown"
                                        class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 ">
                                        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200"
                                            aria-labelledby="doubleDropdownButton">
                                            <li>
                                                <a href="#"
                                                    class="block px-4 py-2 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white">Overview</a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                    class="block px-4 py-2 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white">My
                                                    downloads</a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                    class="block px-4 py-2 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white">Billing</a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                    class="block px-4 py-2 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white">Rewards</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <a href="#"
                                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                </li>
                            </ul>
                            <div class="py-1">
                                <a href="#"
                                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Sign
                                    out</a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a href="#"
                            class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar"
                                class="flex items-center justify-between w-full py-2 pl-3 pr-4  text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0  md:p-0 md:w-auto dark:text-white  dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Đồ
                                gia dụng
                                <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </button>
                        </a>
                    </li>
                    <li>
                        <a href="#"
                            class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar"
                                class="flex items-center justify-between w-full py-2 pl-3 pr-4  text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0  md:p-0 md:w-auto dark:text-white  dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Nội
                                thất
                                <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </button>
                        </a>
                    </li>
                    <li>
                        <a href="#"
                            class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Lưu
                            trữ</a>
                    </li>
                    <li>
                        <a href="#"
                            class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Chăn
                            ga gối đệm</a>
                    </li>
                    <li>
                        <a href="#"
                            class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Đèn</a>
                    </li>
                    <li>
                        <a href="#"
                            class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Thảm</a>
                    </li>
                    <li>
                        <a href="#"
                            class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Tin
                            tức</a>
                    </li>
                    <li>
                        <a href="#"
                            class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Liên
                            hệ</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!--  -->
    <section class="bg-white mb-20 md:mb-50 xl:md-70">

        <div class="container w-screen xl:w-screen md:w-screen lg:w-screen sm:w-screen mx-auto">

            <div class="flex items-center justify-center xl:justify-center">

                <div class="mt-24 text-center xl:text-left xl:mt-20 md:mt-36 lg:mt-20 sm:mt-20">
                    <img src="~/assets/image/banner.jpg" class="container w-screen object-cover img-banner" alt="">
                </div>

            </div>

        </div> <!-- container.// -->

    </section>
    <!-- home section //nd -->
    <section>
        <h2 class="font-semibold text-gray-900 text-xl md:text-2xl text-left px-24 leading-normal mb-9 underline"
            style="text-decoration-thickness: 2px; text-underline-offset: 12px;">Sản Phẩm Nổi Bật
            <hr class="relative top-1">
        </h2>

        <div class="flex justify-center flex-wrap mr-24 ml-14">
            <div class="max-w-sm ml-10 rounded-lg">
                <div class="flex items-center">
                    <span class="bg-red-500 text-white px-2 py-3 rounded-3xl text-xs mr-2 absolute ml-12 mt-14">14%</span>
                </div>
                <a href="#" class="flex justify-center">
                    <img class="rounded-t-lg min-h-sm w-screen h-72" src="~/assets/image/home-img.png" alt="" />
                </a>
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-0 text-base font-bold tracking-tight text-black-900 dark:text-black">Gương Mirror</h5>
                    </a>
                    <div class="mt-5">
                        <span class="text-danger font-bold pr-3">1.990.000đ</span>
                        <span class="line-through text-gray-500">2.390.000đ</span>
                    </div>
                </div>
            </div>
            <div class="max-w-sm ml-10 rounded-lg">
                <div class="flex items-center">
                    <span class="bg-red-500 text-white px-2 py-3 rounded-3xl text-xs mr-2 absolute ml-12 mt-14">14%</span>
                </div>
                <a href="#" class="flex justify-center">
                    <img class="rounded-t-lg min-h-sm w-screen h-72" src="~/assets/image/home-img.png" alt="" />
                </a>
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-0 text-base font-bold tracking-tight text-black-900 dark:text-black">Gương Mirror</h5>
                    </a>
                    <div class="mt-5">
                        <span class="text-danger font-bold pr-3">1.990.000đ</span>
                        <span class="line-through text-gray-500">2.390.000đ</span>
                    </div>
                </div>
            </div>
            <div class="max-w-sm ml-10 rounded-lg">
                <div class="flex items-center">
                    <span class="bg-red-500 text-white px-2 py-3 rounded-3xl text-xs mr-2 absolute ml-12 mt-14">14%</span>
                </div>
                <a href="#" class="flex justify-center">
                    <img class="rounded-t-lg min-h-sm w-screen h-72" src="~/assets/image/home-img.png" alt="" />
                </a>
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-0 text-base font-bold tracking-tight text-black-900 dark:text-black">Gương Mirror</h5>
                    </a>
                    <div class="mt-5">
                        <span class="text-danger font-bold pr-3">1.990.000đ</span>
                        <span class="line-through text-gray-500">2.390.000đ</span>
                    </div>
                </div>
            </div>
            <div class="max-w-sm ml-10 rounded-lg">
                <div class="flex items-center">
                    <span class="bg-red-500 text-white px-2 py-3 rounded-3xl text-xs mr-2 absolute ml-12 mt-14">14%</span>
                </div>
                <a href="#" class="flex justify-center">
                    <img class="rounded-t-lg min-h-sm w-screen h-72" src="~/assets/image/home-img.png" alt="" />
                </a>
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-0 text-base font-bold tracking-tight text-black-900 dark:text-black">Gương Mirror</h5>
                    </a>
                    <div class="mt-5">
                        <span class="text-danger font-bold pr-3">1.990.000đ</span>
                        <span class="line-through text-gray-500">2.390.000đ</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- feature section -->
    <section class="bg-white py-10 md:py-16 xl:relative">
        <h2 class="font-semibold text-gray-900 text-xl md:text-2xl text-left px-24 leading-normal mb-9 underline"
            style="text-decoration-thickness: 2px; text-underline-offset: 12px;">Sản Phẩm Khuyến Mãi
            <hr class="relative top-1">
        </h2>
        <div class="container max-w-screen-xl mx-auto px-4">

            <div class="flex flex-col flex-wrap xl:flex-row justify-end">

                <div class="hidden xl:block absolute left-24 top-32 max-w-screen-lg">
                    <img src="~/assets/image/banproduct.jpg" alt="Feature img" claas="w-screen">
                </div>
                <div class="flex items-center">
                    <span class=" text-white hidden xl:block px-2 py-1 rounded-md text-xs mr-2">
                        <img src="~/assets/image/sale.png" class="w-12 absolute top-32 left-28">
                        <span class="text-white absolute top-36 left-28 ml-2 text-sm font-bold">-20%</span>
                    </span>
                </div>

                <div class="mt-6">

                    <h1 class="font-semibold text-gray-900 text-xl md:text-2xl text-center leading-normal mb-1">Bàn Loop
                        Stand</h1>

                    <div class="mt-0 mb-4 text-center">
                        <span class="line-through text-sm text-gray-300">5.490.000đ</span> <br>
                        <span class="text-danger font-bold pr-3 text-xl">4.990.000đ</span>
                    </div>

                    <div class="w-full rounded-lg ">
                        <table class="flex items-center justify-center text-sm text-left text-black dark:text-black">
                            <tbody class="dark:border-gray-200  text-center ">
                                <tr class="bg-white dark:bg-gray-100 dark:border-gray-200">
                                    <th scope="row" class="py-4 w-80 font-medium whitespace-nowrap dark:text-black">
                                        Chất liệu
                                    </th>
                                    <td class="py-4 w-80">
                                        18x5x10 cm
                                    </td>
                                </tr>
                                <tr class="border-b bg-gray-50 dark:border-gray-200">
                                    <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap dark:text-black ">
                                        Kích thước tổng thể
                                    </th>
                                    <td class="px-6 py-4">
                                        Acrylic
                                    </td>
                                </tr>
                                <tr class="bg-white dark:bg-gray-100 dark:border-gray-200">
                                    <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap dark:text-black">
                                        Dây đeo chất liệu
                                    </th>
                                    <td class="px-6 py-4">
                                        Kim loại Acrylic
                                    </td>
                                </tr>
                                <tr class="border-b bg-gray-50 dark:border-gray-200">
                                    <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap dark:text-black">
                                        Trọng lượng
                                    </th>
                                    <td class="px-6 py-4">
                                        0.8KG
                                    </td>
                                </tr>
                                <tr class="border-b bg-gray-100 dark:border-gray-200">
                                    <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap dark:text-black">
                                        Kiểu khóa
                                    </th>
                                    <td class="px-6 py-4">
                                        Khóa kéo
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <footer class="bg-white rounded-lg max-w-screen-xl ml-14 m-4 mt-12 dark:bg-gray-100">
                        <div class="w-full mx-auto p-5 flex items-center justify-center">
                            <ul
                                class="flex flex-wrap items-center mt-3 gap-10 text-sm font-medium text-black dark:text-black sm:mt-0">
                                <li>
                                    <a href="#" class="mr-4 hover:underline md:mr-6 text-lg font-bold">1645</a> <br>
                                    <span class="text-gray-600">Ngày</span>
                                </li>
                                <span class="font-bold">:</span>
                                <li>
                                    <a href="#" class="mr-4 hover:underline md:mr-6 text-lg font-bold">20</a><br>
                                    <span class="text-gray-600">Giờ</span>
                                </li>
                                <span class="font-bold">:</span>
                                <li>
                                    <a href="#" class="mr-4 hover:underline md:mr-6 text-lg font-bold">46</a><br>
                                    <span class="text-gray-600">Phút</span>
                                </li>
                                <span class="font-bold">:</span>
                                <li>
                                    <a href="#" class="hover:underline text-lg font-bold">53</a><br>
                                    <span class="text-gray-600">Giây</span>
                                </li>
                            </ul>
                        </div>
                    </footer>

                    <div class="flex gap-3 justify-center mt-5 cursor-pointer">
                        <button class="btn border border-[#494043] text-[#594A4E] p-2 rounded-md text-sm">Mua ngay</button>
                        <button class="btn border text-white bg-[#594A4E] p-2 rounded-lg text-md">Xem nhanh</button>
                        <button class="btn border border-[#494043] text-[#594A4E] p-2 rounded-md text-sm">yêu thích</button>
                        <button class="btn border text-white bg-[#594A4E] p-2 rounded-lg text-md">So sánh</button>
                    </div>
                </div>
            </div>
        </div> <!-- container.// -->
    </section>
    <!-- feature section //end -->

    <!-- product nổi bật -->
    <section>
        <h2 class="font-semibold text-gray-900 text-xl md:text-2xl text-left px-24 leading-normal mb-9 underline"
            style="text-decoration-thickness: 2px; text-underline-offset: 12px;">Sản Phẩm Mới
            <hr class="relative top-1">
        </h2>

        <div class=" flex justify-center flex-wrap mr-24 ml-14">
            <div class="max-w-sm ml-10 rounded-lg">
                <div class="flex items-center">
                    <span class="bg-red-500 text-white px-2 py-3 rounded-3xl text-xs mr-2 absolute ml-12 mt-14">14%</span>
                </div>
                <a href="#" class="flex justify-center">
                    <img class="rounded-t-lg min-h-sm w-screen h-72" src="~/assets/image/home-img.png" alt="" />
                </a>
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-0 text-base font-bold tracking-tight text-black-900 dark:text-black">Gương Mirror</h5>
                    </a>
                    <div class="mt-5">
                        <span class="text-danger font-bold pr-3">1.990.000đ</span>
                        <span class="line-through text-gray-500">2.390.000đ</span>
                    </div>
                </div>
            </div>
            <div class="max-w-sm ml-10 rounded-lg">
                <div class="flex items-center">
                    <span class="bg-red-500 text-white px-2 py-3 rounded-3xl text-xs mr-2 absolute ml-12 mt-14">14%</span>
                </div>
                <a href="#" class="flex justify-center">
                    <img class="rounded-t-lg min-h-sm w-screen h-72" src="~/assets/image/home-img.png" alt="" />
                </a>
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-0 text-base font-bold tracking-tight text-black-900 dark:text-black">Gương Mirror</h5>
                    </a>
                    <div class="mt-5">
                        <span class="text-danger font-bold pr-3">1.990.000đ</span>
                        <span class="line-through text-gray-500">2.390.000đ</span>
                    </div>
                </div>
            </div>
            <div class="max-w-sm ml-10 rounded-lg">
                <div class="flex items-center">
                    <span class="bg-red-500 text-white px-2 py-3 rounded-3xl text-xs mr-2 absolute ml-12 mt-14">14%</span>
                </div>
                <a href="#" class="flex justify-center">
                    <img class="rounded-t-lg min-h-sm w-screen h-72" src="~/assets/image/home-img.png" alt="" />
                </a>
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-0 text-base font-bold tracking-tight text-black-900 dark:text-black">Gương Mirror</h5>
                    </a>
                    <div class="mt-5">
                        <span class="text-danger font-bold pr-3">1.990.000đ</span>
                        <span class="line-through text-gray-500">2.390.000đ</span>
                    </div>
                </div>
            </div>
            <div class="max-w-sm ml-10 rounded-lg">
                <div class="flex items-center">
                    <span class="bg-red-500 text-white px-2 py-3 rounded-3xl text-xs mr-2 absolute ml-12 mt-14">14%</span>
                </div>
                <a href="#" class="flex justify-center">
                    <img class="rounded-t-lg min-h-sm w-screen h-72" src="~/assets/image/home-img.png" alt="" />
                </a>
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-0 text-base font-bold tracking-tight text-black-900 dark:text-black">Gương Mirror</h5>
                    </a>
                    <div class="mt-5">
                        <span class="text-danger font-bold pr-3">1.990.000đ</span>
                        <span class="line-through text-gray-500">2.390.000đ</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- end -->

    <div class="container mt-12 relative overflow-auto cursor-pointer">
        <img src="~/assets/image/bannercenter.jpg" alt=""
            class="bannercenter bg-cover w-screen hover:scale-105 transition-all">

        <div class="bannerSaleBig">
            <span class="text-danger font-bold absolute bottom-32 left-40" style="font-size: 12rem; opacity: 0.2; ">50<span
                    class="absolute bottom-10" style="font-size: 9rem;">%</span> </span>
        </div>
        <div class="bannerSaleSmall text-center absolute left-56"
            style="margin-left: 10px; position:absolute; bottom: 8.5rem;">
            <h6 class="text-gray-500 text-sm">Khuyến mãi trong ngày</h6>
            <h2 class="font-bold mb-6" style="font-size: 1.7rem;">Khuyến mãi trong ngày</h2>
            <a href="#1" class="text-white bg-black p-3 px-6 text-xs rounded-sm">SHOP NOW</a>
        </div>
    </div>

    <!-- gallery section -->
    <section class="bg-white py-7 md:py-7">

        <div class="container max-w-screen-2xl mx-auto px-20 pl-16">
            <ul
                class="hidden text-sm gap-4 font-medium text-center text-gray-500 rounded-sm sm:flex dark:divide-gray-100 dark:text-white">
                <li class="w-full h-full border border-[#333333]">
                    <a href="#1"
                        class="inline-block w-full p-3 py-2 dark:bg-[#333333] text-gray-900 focus:ring-4 active focus:outline-none  dark:text-white"
                        aria-current="page">Tất cả sản phẩm</a>
                </li>
                <li class="w-full h-full">
                    <a href="#2"
                        class="inline-block border border-[#333333] w-full p-3 py-2 dark:bg-gray-100 text-gray-900  dark:text-black"
                        aria-current="page">Tủ và giá treo</a>
                </li>
                <li class="w-full h-full">
                    <a href="#2"
                        class="inline-block border border-[#333333] w-full p-3 py-2 dark:bg-gray-100 text-gray-900  dark:text-black"
                        aria-current="page">Bàn</a>
                </li>
                <li class="w-full h-full">
                    <a href="#2"
                        class="inline-block border border-[#333333] w-full p-3 py-2 dark:bg-gray-100 text-gray-900  dark:text-black"
                        aria-current="page">Kệ và đèn</a>
                </li>
                <li class="w-full h-full">
                    <a href="#2"
                        class="inline-block border border-[#333333] w-full p-3 py-2 px-5 dark:bg-gray-100 text-gray-900  dark:text-black"
                        aria-current="page">Ghế</a>
                </li>
            </ul>

        </div>

        <div class="flex justify-center mt-7 mr-0 container max-w-screen-2xl mx-auto flex-wrap relative right-5">
            <div class="max-w-xs ml-10 rounded-lg">
                <div class="flex items-center">
                    <span class="bg-red-500 text-white px-2 py-3 rounded-3xl text-xs mr-2 absolute ml-12 mt-14">14%</span>
                </div>
                <a href="#" class="flex justify-center">
                    <img class="rounded-t-lg min-h-sm w-screen h-72" src="~/assets/image/home-img.png" alt="" />
                </a>
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-0 text-base font-bold tracking-tight text-black-900 dark:text-black">Gương Mirror</h5>
                    </a>
                    <div class="mt-5">
                        <span class="text-danger font-bold pr-3">1.990.000đ</span>
                        <span class="line-through text-gray-500">2.390.000đ</span>
                    </div>
                </div>
            </div>
            <div class="max-w-xs ml-10 rounded-lg">
                <div class="flex items-center">
                    <span class="bg-red-500 text-white px-2 py-3 rounded-3xl text-xs mr-2 absolute ml-12 mt-14">14%</span>
                </div>
                <a href="#" class="flex justify-center">
                    <img class="rounded-t-lg min-h-sm w-screen h-72" src="~/assets/image/home-img.png" alt="" />
                </a>
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-0 text-base font-bold tracking-tight text-black-900 dark:text-black">Gương Mirror</h5>
                    </a>
                    <div class="mt-5">
                        <span class="text-danger font-bold pr-3">1.990.000đ</span>
                        <span class="line-through text-gray-500">2.390.000đ</span>
                    </div>
                </div>
            </div>
            <div class="max-w-xs ml-10 rounded-lg">
                <div class="flex items-center">
                    <span class="bg-red-500 text-white px-2 py-3 rounded-3xl text-xs mr-2 absolute ml-12 mt-14">14%</span>
                </div>
                <a href="#" class="flex justify-center">
                    <img class="rounded-t-lg min-h-sm w-screen h-72" src="~/assets/image/home-img.png" alt="" />
                </a>
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-0 text-base font-bold tracking-tight text-black-900 dark:text-black">Gương Mirror</h5>
                    </a>
                    <div class="mt-5">
                        <span class="text-danger font-bold pr-3">1.990.000đ</span>
                        <span class="line-through text-gray-500">2.390.000đ</span>
                    </div>
                </div>
            </div>
            <div class="max-w-xs ml-10 rounded-lg">
                <div class="flex items-center">
                    <span class="bg-red-500 text-white px-2 py-3 rounded-3xl text-xs mr-2 absolute ml-12 mt-14">14%</span>
                </div>
                <a href="#" class="flex justify-center">
                    <img class="rounded-t-lg min-h-sm w-screen h-72" src="~/assets/image/home-img.png" alt="" />
                </a>
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-0 text-base font-bold tracking-tight text-black-900 dark:text-black">Gương Mirror</h5>
                    </a>
                    <div class="mt-5">
                        <span class="text-danger font-bold pr-3">1.990.000đ</span>
                        <span class="line-through text-gray-500">2.390.000đ</span>
                    </div>
                </div>
            </div>
            <div class="max-w-xs ml-10 rounded-lg">
                <div class="flex items-center">
                    <span class="bg-red-500 text-white px-2 py-3 rounded-3xl text-xs mr-2 absolute ml-12 mt-14">14%</span>
                </div>
                <a href="#" class="flex justify-center">
                    <img class="rounded-t-lg min-h-sm w-screen h-72" src="~/assets/image/home-img.png" alt="" />
                </a>
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-0 text-base font-bold tracking-tight text-black-900 dark:text-black">Gương Mirror</h5>
                    </a>
                    <div class="mt-5">
                        <span class="text-danger font-bold pr-3">1.990.000đ</span>
                        <span class="line-through text-gray-500">2.390.000đ</span>
                    </div>
                </div>
            </div>
            <div class="max-w-xs ml-10 rounded-lg">
                <div class="flex items-center">
                    <span class="bg-red-500 text-white px-2 py-3 rounded-3xl text-xs mr-2 absolute ml-12 mt-14">14%</span>
                </div>
                <a href="#" class="flex justify-center">
                    <img class="rounded-t-lg min-h-sm w-screen h-72" src="~/assets/image/home-img.png" alt="" />
                </a>
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-0 text-base font-bold tracking-tight text-black-900 dark:text-black">Gương Mirror</h5>
                    </a>
                    <div class="mt-5">
                        <span class="text-danger font-bold pr-3">1.990.000đ</span>
                        <span class="line-through text-gray-500">2.390.000đ</span>
                    </div>
                </div>
            </div>
            <div class="max-w-xs ml-10 rounded-lg">
                <div class="flex items-center">
                    <span class="bg-red-500 text-white px-2 py-3 rounded-3xl text-xs mr-2 absolute ml-12 mt-14">14%</span>
                </div>
                <a href="#" class="flex justify-center">
                    <img class="rounded-t-lg min-h-sm w-screen h-72" src="~/assets/image/home-img.png" alt="" />
                </a>
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-0 text-base font-bold tracking-tight text-black-900 dark:text-black">Gương Mirror</h5>
                    </a>
                    <div class="mt-5">
                        <span class="text-danger font-bold pr-3">1.990.000đ</span>
                        <span class="line-through text-gray-500">2.390.000đ</span>
                    </div>
                </div>
            </div>
            <div class="max-w-xs ml-10 rounded-lg">
                <div class="flex items-center">
                    <span class="bg-red-500 text-white px-2 py-3 rounded-3xl text-xs mr-2 absolute ml-12 mt-14">14%</span>
                </div>
                <a href="#" class="flex justify-center">
                    <img class="rounded-t-lg min-h-sm w-screen h-72" src="~/assets/image/home-img.png" alt="" />
                </a>
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-0 text-base font-bold tracking-tight text-black-900 dark:text-black">Gương Mirror</h5>
                    </a>
                    <div class="mt-5">
                        <span class="text-danger font-bold pr-3">1.990.000đ</span>
                        <span class="line-through text-gray-500">2.390.000đ</span>
                    </div>
                </div>
            </div>
        </div>

    </section>
    <!-- gallery section //end -->
    <section class="grid md:grid-cols-2 mt-1 px-16 gap-8 container max-w-screen-2xl mx-auto">
        <div class="container relative overflow-auto cursor-pointer">
            <img src="~/assets/image/bannerarti.jpg" alt=""
                class="bannercenter bg-cover w-full hover:scale-105 transition-all">

            <div class="bannerSaleSmall text-left absolute left-10 hover:text-blue-800 mb-6"
                style="margin-left: 10px; position:absolute; bottom: 8.5rem;">
                <a>
                    <h6 class=" text-sm">Sản phẩm bán chạy</h6>
                    <h2 class="font-bold" style="font-size: 1.7rem;">New Chair <br>Designs</h2>
                </a>
            </div>
        </div>
        <div class="container relative overflow-auto pr-2 cursor-pointer">
            <img src="~/assets/image/tableban.jpg" alt=""
                class="bannercenter bg-cover w-full hover:scale-105 transition-all">

            <div class="bannerSaleSmall text-left absolute left-10 hover:text-blue-800 mb-6"
                style="margin-left: 10px; position:absolute; bottom: 8.5rem;">
                <a>
                    <h6 class=" text-sm">Sản phẩm bán chạy</h6>
                    <h2 class="font-bold" style="font-size: 1.7rem;">Office <br>Cupboards</h2>
                </a>
            </div>
        </div>
    </section>

    <!-- blog tin tức -->
    <section class="mt-7">
        <h2 class="font-semibold text-gray-900 text-xl md:text-2xl text-left px-16 pr-20 leading-normal mb-9 underline"
            style="text-decoration-thickness: 2px; text-underline-offset: 12px;">Tin tức
            <hr class="relative top-1">
        </h2>

        <div class=" flex justify-center mr-20 ml-16 gap-8">
            <div class="container relative overflow-auto cursor-pointer">
                <img src="~/assets/image/tt1.jpg" alt=""
                    class="bannercenter bg-cover w-full hover:scale-105 transition-all">
                <div class="blogDetail relative mt-5">
                    <div class="blogDetailPost mb-4">
                        <span class="blogDetailAuthor text-sm text-gray-500"><i class="bi bi-person"></i> <span>Người viết:
                                F1GEN</span></span>
                        <span class="blogDetailDate text-sm text-gray-500">
                            / &nbsp;<i class="bi bi-calendar3"></i><time datetime="2021-01-11"> 11.01.2021</time>
                        </span>
                    </div>
                    <h3 class="blogDetailName pb-5">
                        <a href="#1" title="Điều gì làm nên chiếc ghế hiện đại hoàn hảo giữa thế kỷ"
                            class="text-lg font-bold">Điều gì làm nên chiếc ghế hiện
                            đại hoàn hảo giữa thế kỷ</a>
                    </h3>
                    <hr class="border-black border-b-2 w-16">
                    <p class="blogDetailDescription pt-5 text-gray-500 mb-4" style="font-size: 0.85rem;">Dưới đây là 25 nhà
                        thiết kế nội thất giỏi nhất ở Berlin mà bạn nên
                        biết! Đắm chìm trong thế giới đầy cảm hứng với một số nhà thiết kế và kiến trúc sư hàng đầu giỏi
                        nhất, chúng tôiTìm hiểu Xu hướng thiết kế Scandinavia cơ bản và...</p>
                    <a class="blogDetailLink text-gray-600 font-bold" style="font-size: 0.87rem;" href="#1">Xem
                        chi tiết <i class="bi bi-arrow-right"></i></a>
                </div>
            </div>
            <div class="container relative overflow-auto cursor-pointer">
                <img src="~/assets/image/tt2.jpg" alt=""
                    class="bannercenter bg-cover w-full hover:scale-105 transition-all">

                <div class="blogDetail relative mt-5">
                    <div class="blogDetailPost mb-4">
                        <span class="blogDetailAuthor text-sm text-gray-500"><i class="bi bi-person"></i> <span>Người viết:
                                F1GEN</span></span>
                        <span class="blogDetailDate text-sm text-gray-500">
                            / &nbsp;<i class="bi bi-calendar3"></i><time datetime="2021-01-11"> 11.01.2021</time>
                        </span>
                    </div>
                    <h3 class="blogDetailName pb-5">
                        <a href="#1" title="Điều gì làm nên chiếc ghế hiện đại hoàn hảo giữa thế kỷ"
                            class="text-lg font-bold">5 nhà thiết kế nội thất hàng đầu ở Rabat mà bạn nên biết</a>
                    </h3>
                    <hr class="border-black border-b-2 w-16">
                    <p class="blogDetailDescription pt-5 text-gray-500 mb-4" style="font-size: 0.85rem;">Dưới đây là 25 nhà
                        thiết kế nội thất giỏi nhất ở Berlin mà bạn nên
                        biết! Đắm chìm trong thế giới đầy cảm hứng với một số nhà thiết kế và kiến trúc sư hàng đầu giỏi
                        nhất, chúng tôiTìm hiểu Xu hướng thiết kế Scandinavia cơ bản và...</p>
                    <a class="blogDetailLink text-gray-600 font-bold" style="font-size: 0.87rem;" href="#1">Xem
                        chi tiết <i class="bi bi-arrow-right"></i></a>
                </div>
            </div>
            <div class="container relative overflow-auto cursor-pointer">
                <img src="~/assets/image/tt3.jpg" alt=""
                    class="bannercenter bg-cover w-full hover:scale-105 transition-all">

                <div class="blogDetail relative mt-5">
                    <div class="blogDetailPost mb-4">
                        <span class="blogDetailAuthor text-sm text-gray-500"><i class="bi bi-person"></i> <span>Người viết:
                                F1GEN</span></span>
                        <span class="blogDetailDate text-sm text-gray-500">
                            / &nbsp;<i class="bi bi-calendar3"></i><time datetime="2021-01-11"> 11.01.2021</time>
                        </span>
                    </div>
                    <h3 class="blogDetailName pb-5">
                        <a href="#1" title="Điều gì làm nên chiếc ghế hiện đại hoàn hảo giữa thế kỷ"
                            class="text-lg font-bold">15 công ty thiết kế nội thất hàng đầu ở Stockholm mà bạn nên biết</a>
                    </h3>
                    <hr class="border-black border-b-2 w-16">
                    <p class="blogDetailDescription pt-5 text-gray-500 mb-4" style="font-size: 0.85rem;">Dưới đây là 25 nhà
                        thiết kế nội thất giỏi nhất ở Berlin mà bạn nên
                        biết! Đắm chìm trong thế giới đầy cảm hứng với một số nhà thiết kế và kiến trúc sư hàng đầu giỏi
                        nhất, chúng tôiTìm hiểu Xu hướng thiết kế Scandinavia cơ bản và...</p>
                    <a class="blogDetailLink text-gray-600 font-bold" style="font-size: 0.87rem;" href="#1">Xem
                        chi tiết <i class="bi bi-arrow-right"></i></a>
                </div>
            </div>
        </div>
    </section>
    <!-- end -->

    <section class="mt-7">
        <h2 class="font-semibold text-gray-900 text-xl md:text-2xl text-left px-16 pr-20 leading-normal mb-9 underline"
            style="text-decoration-thickness: 2px; text-underline-offset: 12px;">Đối tác
            <hr class="relative top-1">
        </h2>
        <div class="flex max-w-screen-xl gap-6 justify-center">
            <a href="#1" class="opacity-40 hover:opacity-100">
                <img src="https://file.hstatic.net/200000265125/file/kent_logo_th_b934b03def2543df9616982be267a8f6.jpg"
                    class="img-fluid ls-is-cached lazyloaded"
                    data-src="https://file.hstatic.net/200000265125/file/kent_logo_th_b934b03def2543df9616982be267a8f6.jpg"
                    alt="Vendor-2">
            </a>
            <a href="#1" class="opacity-40 hover:opacity-100">
                <img src="https://file.hstatic.net/200000265125/file/muuto_logo2_b0cc09585f93443f831fe151b1dfe2a6.jpg"
                    class="img-fluid ls-is-cached lazyloaded"
                    data-src="https://file.hstatic.net/200000265125/file/muuto_logo2_b0cc09585f93443f831fe151b1dfe2a6.jpg"
                    alt="Vendor-3">
            </a>
            <a href="#1" class="opacity-40 hover:opacity-100">
                <img src="https://file.hstatic.net/200000265125/file/uyuni_logo_th_5e3b3a10709d4823a0d2d768c5e63af2.png"
                    class="img-fluid ls-is-cached lazyloaded"
                    data-src="https://file.hstatic.net/200000265125/file/uyuni_logo_th_5e3b3a10709d4823a0d2d768c5e63af2.png"
                    alt="Vendor-4">
            </a>
            <a href="#1" class="opacity-40 hover:opacity-100">
                <img src="https://file.hstatic.net/200000265125/file/rewell_lena__logo_th_c92867c0e1104c848bdcde7c8a4f9c11.jpg"
                    class="img-fluid ls-is-cached lazyloaded"
                    data-src="https://file.hstatic.net/200000265125/file/rewell_lena__logo_th_c92867c0e1104c848bdcde7c8a4f9c11.jpg"
                    alt="Vendor-5">
            </a>
            <a href="#1" class="opacity-40 hover:opacity-100">
                <img src="https://file.hstatic.net/200000265125/file/artek_logo_th_b4d0173da93f4e3a930433b2a2454164.jpg"
                    class="img-fluid ls-is-cached lazyloaded"
                    data-src="https://file.hstatic.net/200000265125/file/artek_logo_th_b4d0173da93f4e3a930433b2a2454164.jpg"
                    alt="Vendor-6">
            </a>
            <a href="#1" class="opacity-40 hover:opacity-100">
                <img src="https://file.hstatic.net/200000265125/file/marimekko-logo1_58f9fb87b0c14d38b0c2cee9da77dbd0.jpg"
                    class="img-fluid ls-is-cached lazyloaded"
                    data-src="https://file.hstatic.net/200000265125/file/marimekko-logo1_58f9fb87b0c14d38b0c2cee9da77dbd0.jpg"
                    alt="Vendor-7">
            </a>
            <a href="#1" class="opacity-40 hover:opacity-100">
                <img src="https://file.hstatic.net/200000265125/file/mysoda_logo_th_10307f9bdbe64ac2959fb04c73ac8294.jpg"
                    class="img-fluid ls-is-cached lazyloaded"
                    data-src="https://file.hstatic.net/200000265125/file/mysoda_logo_th_10307f9bdbe64ac2959fb04c73ac8294.jpg"
                    alt="Vendor-8">
            </a>
        </div>
    </section>

    <!-- footer -->
    <footer class="pt-6 ">
        <img src="~/assets/image/bannercenter.jpg" class="absolute" style="z-index: -1;">
        <div class="container w-screen mx-auto px-4 py-5 bg-black opacity-80">

            <div class="flex flex-col lg:flex-row justify-between max-w-screen-xl">
                <div class="text-center lg:text-left mb-10 lg:mb-0">
                    <div class="flex justify-center lg:justify-start mb-5 pl-20 pt-4">
                        <a href="#1" class="w-60">
                            <img src="https://file.hstatic.net/200000265125/file/furniture-logo-w_f0ebb37270f7425ca90b6976d03ae15e.png"
                                alt="F1GEN Furniture" class="img-fluid">
                        </a>
                    </div>

                    <div class="footerInfo pl-20 pt-0 text-white">
                        <ul class="leading-loose text-sm">
                            <li class="contact-1"><i class="bi bi-map"></i>&nbsp; &nbsp;&nbsp; <span>182 Lê Đại Hành P15 Q11
                                    TPHCM</span>
                            </li>
                            <li class="contact-2"><i class="bi bi-telephone"></i>&nbsp; &nbsp;&nbsp;<span>1900636099</span>
                            </li>
                            <li class="contact-3"><i class="bi bi-envelope"></i>&nbsp; &nbsp;&nbsp;
                                <span>support@f1genz.com</span>
                            </li>
                            <li class="contact-4"><i class="bi bi-stopwatch"></i>&nbsp; &nbsp;&nbsp; <span>08:00 AM - 06:00
                                    PM</span></li>

                        </ul>
                    </div>
                    <div class="flex items-center justify-center lg:justify-start space-x-5 pl-20 pt-5">
                        <a href="#"
                            class="text-white rounded-full  hover:text-gray-500 transition ease-in-out duration-500">
                            <i class="bi bi-facebook"></i>
                        </a>

                        <a href="#"
                            class=" text-white rounded-full  hover:text-gray-500 transition ease-in-out duration-500">
                            <i class="bi bi-youtube"></i>
                        </a>

                        <a href="#"
                            class="  text-white rounded-full  hover:text-gray-500 transition ease-in-out duration-500">
                            <i class="bi bi-github"></i>
                        </a>

                        <a href="#"
                            class="  text-white rounded-full  hover:text-gray-500 transition ease-in-out duration-500">
                            <i class="bi bi-twitter"></i>
                        </a>

                        <a href="#"
                            class="  text-white rounded-full  hover:text-gray-500 transition ease-in-out duration-500">
                            <i class="bi bi-instagram"></i>
                        </a>
                    </div>
                </div>

                <div class="text-center lg:text-left mb-10 lg:mb-0">
                    <div class="footerTopContentItem text-white pt-4">
                        <div class="footerMainList">
                            <div class="FooterMainListToggle">
                                <ul class="text-sm" style="line-height: 2.7rem;">
                                    <li class="item block">
                                        <a href="/" title="Trang chủ">Trang chủ</a>
                                    </li>

                                    <li class="item block">
                                        <a href="#" title="Tất cả sản phẩm">Tất cả sản phẩm</a>
                                    </li>

                                    <li class="item block">
                                        <a href="#" title="Bài viết">Bài viết</a>
                                    </li>

                                    <li class="item block">
                                        <a href="#" title="Liên hệ">Liên hệ</a>
                                    </li>

                                    <li class="item block">
                                        <a href="/" title="Tìm kiếm">Tìm kiếm</a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="text-center lg:text-left mb-10 lg:mb-0">
                    <div class="footerTopContentItem text-white pt-4">
                        <div class="footerTopContentItem">
                            <ul style="line-height: 2.7rem;">
                                <li class="item">
                                    <a href="#" title="Giới thiệu">Giới thiệu</a>
                                </li>

                                <li class="item">
                                    <a href="#" title="Chính sách đổi trả">Chính sách đổi
                                        trả</a>
                                </li>

                                <li class="item">
                                    <a href="#" title="Chính sách bảo mật">Chính sách bảo
                                        mật</a>
                                </li>

                                <li class="item">
                                    <a href="/" title="Chính sách khiếu nại">Chính sách khiếu nại</a>
                                </li>

                                <li class="item">
                                    <a href="#" title="Điều khoản dịch vụ">Điều khoản dịch
                                        vụ</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>

                <div class="text-center lg:text-left mb-10 lg:mb-0">
                    <div class="footerTopContentItem text-white pt-4">
                        <div class="footerTopContentItem">
                            <ul style="line-height: 2.7rem;">
                                <li class="item">
                                    <a href="/" title="Khác biệt của F1GEN">Khác biệt của F1GEN</a>
                                </li>

                                <li class="item">
                                    <a href="/" title="Bán hàng cùng F1GEN">Bán hàng cùng F1GEN</a>
                                </li>

                                <li class="item">
                                    <a href="/" title="Câu hỏi thường gặp">Câu hỏi thường gặp</a>
                                </li>

                                <li class="item">
                                    <a href="/" title="Hướng dẫn thanh toán">Hướng dẫn thanh toán</a>
                                </li>

                                <li class="item">
                                    <a href="/" title="Hướng dẫn hoàn trả">Hướng dẫn hoàn trả</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>

                <div class="lg:text-left mb-10 lg:mb-0">
                    <div class="footerTopContentItem text-white pt-4">
                        <div class="fb-page fb_iframe_widget" data-hide-cta="true"
                            data-href="https://www.facebook.com/f1genz" data-tabs="timeline" data-width="" data-height="200"
                            data-small-header="false" data-adapt-container-width="true" data-hide-cover="false"
                            data-show-facepile="true" fb-xfbml-state="rendered"
                            fb-iframe-plugin-query="adapt_container_width=true&amp;app_id=&amp;container_width=338&amp;height=200&amp;hide_cover=false&amp;hide_cta=true&amp;href=https%3A%2F%2Fwww.facebook.com%2Ff1genz&amp;locale=vi_VN&amp;sdk=joey&amp;show_facepile=true&amp;small_header=false&amp;tabs=timeline&amp;width=">
                            <span style="vertical-align: bottom; width: 338px; height: 200px;"><iframe name="f1743e23869d82"
                                    width="1000px" height="200px" data-testid="fb:page Facebook Social Plugin"
                                    title="fb:page Facebook Social Plugin" frameborder="0" allowtransparency="true"
                                    allowfullscreen="true" scrolling="no" allow="encrypted-media"
                                    src="https://web.facebook.com/v9.0/plugins/page.php?adapt_container_width=true&amp;app_id=&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df112d854149f2f4%26domain%3Df1gen-furniture.myharavan.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Ff1gen-furniture.myharavan.com%252Ff2bd3ea2f83935%26relation%3Dparent.parent&amp;container_width=338&amp;height=200&amp;hide_cover=false&amp;hide_cta=true&amp;href=https%3A%2F%2Fwww.facebook.com%2Ff1genz&amp;locale=vi_VN&amp;sdk=joey&amp;show_facepile=true&amp;small_header=false&amp;tabs=timeline&amp;width="
                                    style="border: none; visibility: visible; width: 338px; height: 200px;" class="">
                                </iframe>
                            </span>
                        </div>
                    </div>
                </div>


            </div>
            <div class="footerBottom">
                <div class="container">
                    <div class="row flex justify-center gap-80">
                        <!-- <hr class="w-10/12 ml-28 mt-7"> -->
                        <div class="col-lg-7 col-md-12 col-sm-12 col-12">
                            <p class="text-white text-sm mt-5 items-center pt-5 pl-28 ">© 2023 - All rights
                                reserved by
                                <a target="_blank" href="#1">F1GENZ
                                    TECHNOLOGY CO., LTD.</a> <a href="#1">Power by
                                    Haravan
                                </a>
                            </p>
                        </div>
                        <div class="col-lg-5 col-md-12 col-sm-12 col-12 text-right paymentWrap ">

                            <div class="paymentinfo flex gap-1 justify-end mb-20 pb-11 mr-36 mt-8">

                                <a href="javascript:void(0)">
                                    <img src="https://file.hstatic.net/200000265255/file/mpos_32354f69c1764017bd7eae7e89e7c50c.svg"
                                        class=" lazyloaded"
                                        data-src="https://file.hstatic.net/200000265255/file/mpos_32354f69c1764017bd7eae7e89e7c50c.svg"
                                        alt="Payment">
                                </a>

                                <a href="javascript:void(0)">
                                    <img src="https://file.hstatic.net/200000265255/file/master_card_5321ef59e1074a55a147267723b6fd6c.svg"
                                        class=" lazyloaded"
                                        data-src="https://file.hstatic.net/200000265255/file/master_card_5321ef59e1074a55a147267723b6fd6c.svg"
                                        alt="Payment">
                                </a>

                                <a href="javascript:void(0)">
                                    <img src="https://file.hstatic.net/200000265255/file/vnpay_f12854d8695143b5a0787b2fd88aed32.svg"
                                        class=" lazyloaded"
                                        data-src="https://file.hstatic.net/200000265255/file/vnpay_f12854d8695143b5a0787b2fd88aed32.svg"
                                        alt="Payment">
                                </a>

                                <a href="javascript:void(0)">
                                    <img src="https://file.hstatic.net/200000265255/file/pay_later_ffb8263a3bbe43c780e02e5baeae9d4c.svg"
                                        class=" lazyloaded"
                                        data-src="https://file.hstatic.net/200000265255/file/pay_later_ffb8263a3bbe43c780e02e5baeae9d4c.svg"
                                        alt="Payment">
                                </a>

                                <a href="javascript:void(0)">
                                    <img src="https://file.hstatic.net/200000265255/file/jcb_df62358763ed4e3b8564653784837dde.svg"
                                        class=" lazyloaded"
                                        data-src="https://file.hstatic.net/200000265255/file/jcb_df62358763ed4e3b8564653784837dde.svg"
                                        alt="Payment">
                                </a>

                                <a href="javascript:void(0)">
                                    <img src="https://file.hstatic.net/200000265255/file/zalopay_f6e2cf9935f84f838ae7598a4c7dde61.svg"
                                        class=" lazyloaded"
                                        data-src="https://file.hstatic.net/200000265255/file/zalopay_f6e2cf9935f84f838ae7598a4c7dde61.svg"
                                        alt="Payment">
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> <!-- container.// -->
    </footer>
    <!-- <button @click="goToindex">helooooooo</button> -->
</template>

<script>
export default {
    methods: {
        goToNavbar() {
            this.$router.push('/Navbar');
        }
    }
}
</script>

<style>
::-webkit-scrollbar {
    display: none;
    overflow-x: hidden;
}

* {
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
}

#search-navbarwi {
    width: 500px;
}

.icon-phone {
    font-size: 1.2 rem;
}

.icon-navbarhi {
    font-size: 1.3rem;
}
</style>

  