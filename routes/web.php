<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Auth::routes(['verify' => true]);

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])
    ->name('home')->middleware('verified');

Route::get('/{pathMatch}', function(){
    return view('welcome');
})->where('pathMatch','.*');
