<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
})->name('welcome');

Route::get('/products/category/{categoryName}', function (string $categoryName) {
    return Inertia::render('Category', [
        'categoryName' => $categoryName,
    ]);
})->name('category');

Route::get('/products/{productId}', function (string $productId) {
    return Inertia::render('Product', [
        'productId' => $productId,
    ]);
})->name('product');

Route::get('/store/login', function () {
    return Inertia::render('StoreLogin');
})->name('store.login');

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
});
