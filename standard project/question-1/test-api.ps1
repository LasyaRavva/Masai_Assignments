# Test script for Todo API

Write-Host "Testing Todo API..." -ForegroundColor Green
Write-Host ""

# Base URL
$baseUrl = "http://localhost:3000"

# Test 1: Root endpoint
Write-Host "1. Testing root endpoint..." -ForegroundColor Yellow
try {
    $response = Invoke-RestMethod -Uri "$baseUrl" -Method GET
    Write-Host "✓ Root endpoint working" -ForegroundColor Green
    $response | ConvertTo-Json
} catch {
    Write-Host "✗ Root endpoint failed: $_" -ForegroundColor Red
}

Write-Host ""

# Test 2: Get all todos (should be empty initially)
Write-Host "2. Testing GET /api/todos..." -ForegroundColor Yellow
try {
    $response = Invoke-RestMethod -Uri "$baseUrl/api/todos" -Method GET
    Write-Host "✓ GET all todos working" -ForegroundColor Green
    $response | ConvertTo-Json
} catch {
    Write-Host "✗ GET all todos failed: $_" -ForegroundColor Red
}

Write-Host ""

# Test 3: Create a new todo
Write-Host "3. Testing POST /api/todos..." -ForegroundColor Yellow
try {
    $body = @{
        title = "Learn Express.js"
        description = "Master MVC architecture"
    } | ConvertTo-Json

    $response = Invoke-RestMethod -Uri "$baseUrl/api/todos" -Method POST -Body $body -ContentType "application/json"
    Write-Host "✓ POST new todo working" -ForegroundColor Green
    $todoId = $response.data.id
    $response | ConvertTo-Json -Depth 5
} catch {
    Write-Host "✗ POST new todo failed: $_" -ForegroundColor Red
}

Write-Host ""

# Test 4: Create another todo
Write-Host "4. Testing POST /api/todos (second todo)..." -ForegroundColor Yellow
try {
    $body = @{
        title = "Build Todo App"
        description = "Following standard coding practices"
    } | ConvertTo-Json

    $response = Invoke-RestMethod -Uri "$baseUrl/api/todos" -Method POST -Body $body -ContentType "application/json"
    Write-Host "✓ POST second todo working" -ForegroundColor Green
    $response | ConvertTo-Json -Depth 5
} catch {
    Write-Host "✗ POST second todo failed: $_" -ForegroundColor Red
}

Write-Host ""

# Test 5: Get all todos again
Write-Host "5. Testing GET /api/todos (should have 2 todos)..." -ForegroundColor Yellow
try {
    $response = Invoke-RestMethod -Uri "$baseUrl/api/todos" -Method GET
    Write-Host "✓ GET all todos working (Count: $($response.data.Count))" -ForegroundColor Green
    $response | ConvertTo-Json -Depth 5
} catch {
    Write-Host "✗ GET all todos failed: $_" -ForegroundColor Red
}

Write-Host ""

# Test 6: Get single todo
if ($todoId) {
    Write-Host "6. Testing GET /api/todos/$todoId..." -ForegroundColor Yellow
    try {
        $response = Invoke-RestMethod -Uri "$baseUrl/api/todos/$todoId" -Method GET
        Write-Host "✓ GET single todo working" -ForegroundColor Green
        $response | ConvertTo-Json -Depth 5
    } catch {
        Write-Host "✗ GET single todo failed: $_" -ForegroundColor Red
    }

    Write-Host ""

    # Test 7: Update todo
    Write-Host "7. Testing PATCH /api/todos/$todoId..." -ForegroundColor Yellow
    try {
        $body = @{
            completed = $true
        } | ConvertTo-Json

        $response = Invoke-RestMethod -Uri "$baseUrl/api/todos/$todoId" -Method PATCH -Body $body -ContentType "application/json"
        Write-Host "✓ PATCH todo working" -ForegroundColor Green
        $response | ConvertTo-Json -Depth 5
    } catch {
        Write-Host "✗ PATCH todo failed: $_" -ForegroundColor Red
    }

    Write-Host ""

    # Test 8: Delete todo
    Write-Host "8. Testing DELETE /api/todos/$todoId..." -ForegroundColor Yellow
    try {
        $response = Invoke-RestMethod -Uri "$baseUrl/api/todos/$todoId" -Method DELETE
        Write-Host "✓ DELETE todo working" -ForegroundColor Green
        $response | ConvertTo-Json
    } catch {
        Write-Host "✗ DELETE todo failed: $_" -ForegroundColor Red
    }

    Write-Host ""
}

Write-Host ""
Write-Host "Testing complete!" -ForegroundColor Green
