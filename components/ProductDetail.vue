<template>
    <!-- <router-link to="/Navbar"></router-link> -->

    <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet">
    </head>


    <nav class="bg-white border-gray-200 dark:bg-white fixed top-0 left-0 w-full z-50">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="#" class="flex items-center">
                <img src="#" class="h-8 mr-3" alt="" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-amber-950">Fpoly</span>
            </a>

            <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
                <div class="relative mt-3 md:hidden">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    </div>
                    <input type="text" id="search-navbar"
                        class="block w-full p-2 pl-10 text-sm text-gray-200 border border-gray-300 rounded-lg bg-gray-50 focus:ring-white-500 focus:border-white-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search...">
                </div>
                <ul
                    class="flex flex-col items-center font-bold p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-white-700 dark:border-gray-700">
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
                <div class="relative hidden md:block">
                    <div class="absolute inset-y-0 left-0 flex items-center  pl-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="none"
                            viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                        <span class="sr-only">Search icon</span>
                    </div>
                    <input type="text" id="search-navbarwi"
                        class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
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

    <nav class="bg-[#594A4E] border-gray-200 dark:bg-[#594A4E] dark:border-gray-700 fixed top-20 left-0 w-full z-50">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
            <a href="#" class="flex items-center">
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"><i
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
                            class="flex items-center justify-between w-full py-2 pl-3 pr-4  text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0  md:p-0 md:w-auto dark:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Đồ
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

    <!-- feature section -->
    <section class="bg-white py-10 md:py-16 xl:relative top-24 xl:top-36 lg:top-44 md:top-52 sm:top-72">
        <h2 class=" text-gray-500 text-left px-24 leading-normal mb-9 underline"
            style="text-decoration-thickness: 2px; text-underline-offset: 12px;">Trang chủ / Tất cả sản phẩm / Túi đựng giặt
            đồ Laundry
            <hr class="relative top-1">
        </h2>
        <div class="container max-w-screen-xl mx-auto px-4">

            <div class="flex flex-col flex-wrap xl:flex-row justify-between">

                <div class="max-w-screen-lg ">

                    <div class="grid gap-4 max-w-full">
                        <div>
                            <img class="h-auto max-w-full rounded-lg" src="~/assets/image/banproduct.jpg" alt="">
                        </div>
                        <div class="grid grid-cols-5 gap-4 ">
                            <div>
                                <img class="h-auto w-20 rounded-lg hover:border border-[#a4a4a4] hover:scale-105 cursor-pointer"
                                    src="~/assets/image/banproduct.jpg" alt="">
                            </div>
                            <div>
                                <img class="h-auto w-20 rounded-lg hover:border border-[#a4a4a4] hover:scale-105 cursor-pointer"
                                    src="~/assets/image/banproduct.jpg" alt="">
                            </div>
                            <div>
                                <img class="h-auto w-20 rounded-lg hover:border border-[#a4a4a4] hover:scale-105 cursor-pointer"
                                    src="~/assets/image/banproduct.jpg" alt="">
                            </div>
                            <div>
                                <img class="h-auto w-20 rounded-lg hover:border border-[#a4a4a4] hover:scale-105 cursor-pointer"
                                    src="~/assets/image/banproduct.jpg" alt="">
                            </div>
                            <div>
                                <img class="h-auto w-20 rounded-lg hover:border border-[#a4a4a4] hover:scale-105 cursor-pointer"
                                    src="~/assets/image/banproduct.jpg" alt="">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="mt-6">

                    <h1 class="font-semibold text-gray-900 text-xl md:text-2xl text-start leading-normal mb-1">Bàn Loop
                        Stand</h1>
                    <div class="leading-loose">
                        <p> <b>Mã sản phẩm:</b> F-143</p>
                        <p class="mt-2"><b>Tình trạng:</b> Còn hàng</p>
                        <p><b>Thương hiệu:</b> F1GEN</p>
                        <p><b>Phân khúc:</b> table</p>
                        <p><b>Nhóm sản phẩm:</b> Ghế, Bàn ghế, Kệ và đèn, <br> Tủ và giá treo, Tất cả sản phẩm</p>
                    </div>
                    <br>
                    <hr>
                    <br>
                    <div class="mt-0 mb-4 text-start">
                        <span class="text-danger font-bold pr-3 text-xl">4.990.000đ</span>
                        <span class="line-through text-sm text-gray-300">5.490.000đ</span>
                    </div>
                    <hr>
                    <br>
                    <div class="mb-1">
                        <span class="">Màu Sắc</span><br>
                        <div class="text-center flex gap-4">
                            <div class=" hover:scale-105 hover:border cursor-pointer mt-5"
                                style="background: white; width: 40px; height: 40px; border: 1px solid rgb(189, 189, 189);">
                            </div>
                            <div class=" hover:scale-105 hover:border cursor-pointer mt-5"
                                style="background: black; width: 40px; height: 40px; border: 1px solid rgb(189, 189, 189);">
                            </div>
                        </div>
                    </div>
                    <br>
                    <div class="mb-4">
                        <span class="">Kích Thước</span><br>
                        <div class="text-center flex gap-4">
                            <div class="hover:scale-105 hover:border cursor-pointer mt-5 p-2 font-bold"
                                style=" border: 1px solid rgb(189, 189, 189);">
                                20x23cm
                            </div>
                            <div class=" hover:scale-105 hover:border cursor-pointer mt-5 p-2"
                                style=" border: 1px solid rgb(189, 189, 189); color: gray;">
                                40x30cm
                            </div>
                        </div>
                    </div>
                    <div class="mb-5 flex">
                        <input type="button" value="-"
                            style="outline: none; width: 38px; height: 34.9px; border: 1px solid rgb(160, 160, 160); text-align: center; cursor: pointer;">
                        <input type="text" value="1"
                            style="outline: none; width: 75px; height: 35px; border: 1px solid rgb(160, 160, 160); text-align: center;">
                        <input type="button" value="+"
                            style="outline: none; width: 38px; height: 34.9px; border: 1px solid rgb(160, 160, 160); text-align: center; cursor: pointer;">
                        <span class="gap-10 flex pl-10">
                            <span><i class="bi bi-heart"></i></span>
                            <span><i class="bi bi-share"></i></span>
                        </span>
                    </div>
                    <div class="flex gap-3 justify-start mt-5 cursor-pointer">
                        <button class="btn border border-[#494043] text-[#594A4E] p-2 px-10 rounded-md text-sm">Mua
                            ngay</button>
                        <button class="btn border text-white bg-[#594A4E] p-2 rounded-lg text-md">Thêm Vào Giỏ Hàng</button>
                    </div>
                    <br>

                    <div class="w-full rounded-lg ">
                        <table class="flex items-center justify-center text-sm text-left text-black dark:text-black">
                            <tbody class="dark:border-gray-200  text-center ">
                                <tr class="bg-white dark:bg-gray-100 dark:border-gray-200">
                                    <th scope="row" class="py-4 font-medium whitespace-nowrap dark:text-black">
                                        Chất liệu
                                    </th>
                                    <td class="py-4">
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
                </div>
                <div class="productWrapSidebarGroup bg-gray-200 p-6 h-96">

                    <div class="productWrapSidebarItem flex gap-5">
                        <img src="https://file.hstatic.net/200000265255/file/static-icons-2_dfa67a48c16c4ba788cd269ea5b0e51b.png"
                            alt="ItemSidebar" class="w-18 h-10">
                        <div class="productWrapSidebarContent">
                            <h5>Đảm bảo đúng hẹn</h5>
                            <p>Hoàn lại tiền trong 30 ngày</p>
                        </div>
                    </div>
                    <br>
                    <hr class="border-black">
                    <br>
                    <div class="productWrapSidebarItem flex gap-5">
                        <img src="https://file.hstatic.net/200000265255/file/static-icons-1_b925e91e6ad74e8d9ecbac3f725b17e4.png"
                            alt="ItemSidebar" class="w-10 h-8">
                        <div class="productWrapSidebarContent">
                            <h5>Miễn phí vận chuyển</h5>
                            <p>Hóa đơn trên 100.000 VNĐ</p>
                        </div>
                    </div>
                    <br>
                    <hr class="border-black">
                    <br>
                    <div class="productWrapSidebarItem flex gap-5">
                        <img src="https://file.hstatic.net/200000265255/file/static-icons-4_24025647d256438eb38834a0d9f9ae78.png"
                            alt="ItemSidebar" class="w-10 h-8">
                        <div class="productWrapSidebarContent">
                            <h5>Hổ trợ trực tuyến</h5>
                            <p>Chúng tôi hổ trợ 24/24</p>
                        </div>
                    </div>
                    <br>
                    <hr class="border-black">
                    <br>
                    <div class="productWrapSidebarItem flex gap-5">
                        <img src="https://file.hstatic.net/200000265255/file/static-icons-3_29b6268e726d4258a7b3413a8d94f23d.png"
                            alt="ItemSidebar" class="w-10 h-10">
                        <div class="productWrapSidebarContent">
                            <h5>Khuyến mãi</h5>
                            <p>Giảm giá 50% tất cả sản phẩm</p>
                        </div>
                    </div>

                </div>
            </div>

            <div class="mb-6 border-b border-gray-200 dark:border-gray-700 mt-8">
                <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-tab"
                    data-tabs-toggle="#default-tab-content" role="tablist">
                    <li class="mr-2" role="presentation">
                        <button class="inline-block p-4 border-b-2 rounded-t-lg font-bold text-xl" id="profile-tab"
                            data-tabs-target="#profile" type="button" role="tab" aria-controls="profile"
                            aria-selected="false">Mô Tả Sản Phẩm</button>
                    </li>
                    <li class="mr-2" role="presentation">
                        <button
                            class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 text-xl hover:border-gray-300 dark:hover:text-gray-300"
                            id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab"
                            aria-controls="dashboard" aria-selected="false">Hướng Dẫn Bảo Quản</button>
                    </li>
                    <li class="mr-2" role="presentation">
                        <button
                            class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 text-xl hover:border-gray-300 dark:hover:text-gray-300"
                            id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings"
                            aria-selected="false">Bình Luận</button>
                    </li>
                </ul>
            </div>
            <p>
                Loop Stand là loạt giá treo áo khoác, bàn ghế tủ quần áo và bàn ghế được thiết kế tốt và cực kỳ tiện dụng
                của Leif Jørgensen, tất cả đều mang bản sắc gia đình nhất quán. Bàn Loop Stand có cùng biểu hiện trực quan
                sạch sẽ giống như giá để tủ quần áo, trong đó các giá đỡ ba chân đặc trưng được gắn vào mặt bàn bằng vít.
                <br>
                <br>
                Bàn Loop Stand có sẵn trong một số biến thể và chiều cao để phù hợp với nhiều loại phòng ăn và văn phòng
                trong môi trường công ty và riêng tư.
                <br>
                <br>
                Chi phí vận chuyển dựa trên trọng lượng. Chỉ cần thêm sản phẩm vào giỏ hàng và sử dụng Công cụ tính phí vận
                chuyển để xem giá vận chuyển.
            </p>
            <div id="default-tab-content">
                <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="profile" role="tabpanel"
                    aria-labelledby="profile-tab">

                </div>
                <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="dashboard" role="tabpanel"
                    aria-labelledby="dashboard-tab">

                </div>
                <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="settings" role="tabpanel"
                    aria-labelledby="settings-tab">

                </div>

            </div>

        </div> <!-- container.// -->
    </section>
    <!-- feature section //end -->
    <section>
        <h2 class="font-semibold text-gray-900 text-xl md:text-2xl text-left px-24 leading-normal mb-9 mt-52 underline"
            style="text-decoration-thickness: 2px; text-underline-offset: 12px;">Sản Phẩm Liên Quan
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
    <!-- <button @click="goToProductDetail">Go to Product Detail</button> -->
</template>
<script>
export default {
    methods: {
        goToProductDetail() {
            this.$router.push('/Productdetail');
        }
    }
}
</script>