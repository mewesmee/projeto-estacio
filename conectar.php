<?php
$user='postgres.cxvvltutopbjrpfbjfzs'; 
$password='eDUARDOTRABALHO32321';
$host='aws-0-us-east-2.pooler.supabase.com';
$port='6543';
$dbname='postgres';

// String de conexão
$conn_string = "host=$host port=$port dbname=$dbname user=$user password=$password sslmode=require";

// Tenta conectar
$conn = pg_connect($conn_string);

if (!$conn) {
    echo "❌ Erro ao conectar ao PostgreSQL (Supabase)!<br>";
} else {
    echo "✅ Conexão bem-sucedida ao PostgreSQL (Supabase)!<br>";
}
