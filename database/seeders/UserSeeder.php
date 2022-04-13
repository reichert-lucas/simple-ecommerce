<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        if (!User::where('email', 'lucas.reichert@redes.ufsm.br')->count()) {
            User::factory(1)->create([
                'email' => 'lucas.reichert@redes.ufsm.br'
            ]);
        }
    }
}
