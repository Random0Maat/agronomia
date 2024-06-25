<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Coleccion extends Model
{
    use HasFactory;
    protected $table = 'coleccion';
    protected $primaryKey='id';
    public $timestamps = false;
    protected $fillable = [
       
        'nombre',
        'descripcion',
        'planta',
       
    ];
    

}
